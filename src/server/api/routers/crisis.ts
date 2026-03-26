import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const ensureVerifiedEtatMember = async (ctx: {
  session: { user: { id: string; isVerified?: boolean } };
  db: {
    user: {
      findUnique: (args: {
        where: { id: string };
        select: { etater: { select: { id: true } } };
      }) => Promise<{ etater: { id: string }[] } | null>;
    };
  };
}) => {
  if (!ctx.session.user.isVerified) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "User is not verified",
    });
  }

  const user = await ctx.db.user.findUnique({
    where: { id: ctx.session.user.id },
    select: { etater: { select: { id: true } } },
  });

  if (!user || user.etater.length === 0) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "User must belong to at least one etat",
    });
  }

  return user.etater.map((e) => e.id);
};

const checkEditAccess = async (
  ctx: {
    session: { user: { id: string } };
    db: {
      crisis: {
        findUnique: (args: {
          where: { id: string };
          include: { allowedEtater: { select: { id: true } } };
        }) => Promise<{
          createdById: string;
          allowedEtater: { id: string }[];
        } | null>;
      };
    };
  },
  crisisId: string,
  userEtatIds: string[],
) => {
  const crisis = await ctx.db.crisis.findUnique({
    where: { id: crisisId },
    include: { allowedEtater: { select: { id: true } } },
  });

  if (!crisis) {
    throw new TRPCError({ code: "NOT_FOUND", message: "Crisis not found" });
  }

  // Creator can always edit
  if (crisis.createdById === ctx.session.user.id) {
    return crisis;
  }

  // If no allowed etater, anyone can edit
  if (crisis.allowedEtater.length === 0) {
    return crisis;
  }

  // Otherwise, user must belong to one of the allowed etater
  const allowedIds = new Set(crisis.allowedEtater.map((e) => e.id));
  const hasAccess = userEtatIds.some((id) => allowedIds.has(id));

  if (!hasAccess) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You do not have edit access to this crisis",
    });
  }

  return crisis;
};

const validateUserEtat = (userEtatIds: string[], etatId: string) => {
  if (!userEtatIds.includes(etatId)) {
    throw new TRPCError({
      code: "FORBIDDEN",
      message: "You do not belong to this etat",
    });
  }
};

const crisisInput = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().min(1),
  what: z.string().trim().min(1),
  how: z.string().trim().min(1),
  when: z.coerce.date(),
  severity: z.enum(["LOW", "MEDIUM", "HIGH"]),
  location: z.string().trim().min(1),
  allowedEtaterIds: z.array(z.string()).optional(),
});

export const crisisRouter = createTRPCRouter({
  list: protectedProcedure.query(async ({ ctx }) => {
    const userEtatIds = await ensureVerifiedEtatMember(ctx);

    const crises = await ctx.db.crisis.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        createdBy: { select: { id: true, name: true } },
        allowedEtater: { select: { id: true, title: true } },
      },
    });

    return crises.map((crisis) => {
      const isCreator = crisis.createdById === ctx.session.user.id;
      const noRestrictions = crisis.allowedEtater.length === 0;
      const allowedIds = new Set(crisis.allowedEtater.map((e) => e.id));
      const belongsToAllowed = userEtatIds.some((id) => allowedIds.has(id));

      return {
        ...crisis,
        canEdit: isCreator || noRestrictions || belongsToAllowed,
      };
    });
  }),

  create: protectedProcedure
    .input(crisisInput)
    .mutation(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx);

      return ctx.db.crisis.create({
        data: {
          title: input.title,
          description: input.description,
          what: input.what,
          how: input.how,
          when: input.when,
          severity: input.severity,
          location: input.location,
          createdBy: { connect: { id: ctx.session.user.id } },
          ...(input.allowedEtaterIds && input.allowedEtaterIds.length > 0
            ? {
                allowedEtater: {
                  connect: input.allowedEtaterIds.map((id) => ({ id })),
                },
              }
            : {}),
        },
      });
    }),

  getById: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx);

      const crisis = await ctx.db.crisis.findUnique({
        where: { id: input.id },
        include: {
          createdBy: { select: { id: true, name: true } },
          allowedEtater: { select: { id: true, title: true } },
        },
      });

      if (!crisis) {
        throw new TRPCError({
          code: "NOT_FOUND",
          message: "Crisis not found",
        });
      }

      return crisis;
    }),

  update: protectedProcedure
    .input(crisisInput.extend({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(ctx);
      await checkEditAccess(ctx, input.id, userEtatIds);

      return ctx.db.crisis.update({
        where: { id: input.id },
        data: {
          title: input.title,
          description: input.description,
          what: input.what,
          how: input.how,
          when: input.when,
          severity: input.severity,
          location: input.location,
          allowedEtater: {
            set: input.allowedEtaterIds
              ? input.allowedEtaterIds.map((id) => ({ id }))
              : [],
          },
        },
      });
    }),

  listEtater: protectedProcedure.query(async ({ ctx }) => {
    await ensureVerifiedEtatMember(ctx);

    return ctx.db.etat.findMany({
      select: { id: true, title: true },
      orderBy: { title: "asc" },
    });
  }),

  listTimelineEntries: protectedProcedure
    .input(z.object({ crisisId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx);

      return ctx.db.timelineEntry.findMany({
        where: { crisisId: input.crisisId },
        orderBy: { createdAt: "desc" },
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });
    }),

  listMeasures: protectedProcedure
    .input(z.object({ crisisId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx);

      return ctx.db.measure.findMany({
        where: { crisisId: input.crisisId },
        orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });
    }),

  addTimelineEntry: protectedProcedure
    .input(
      z.object({
        crisisId: z.string().min(1),
        text: z.string().trim().min(1),
        etatId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(ctx);
      await checkEditAccess(ctx, input.crisisId, userEtatIds);
      validateUserEtat(userEtatIds, input.etatId);

      return ctx.db.timelineEntry.create({
        data: {
          text: input.text,
          crisis: { connect: { id: input.crisisId } },
          etat: { connect: { id: input.etatId } },
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  addMeasure: protectedProcedure
    .input(
      z.object({
        crisisId: z.string().min(1),
        text: z.string().trim().min(1),
        severity: z.enum(["LOW", "MEDIUM", "HIGH"]),
        etatId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(ctx);
      await checkEditAccess(ctx, input.crisisId, userEtatIds);
      validateUserEtat(userEtatIds, input.etatId);

      return ctx.db.measure.create({
        data: {
          text: input.text,
          severity: input.severity,
          crisis: { connect: { id: input.crisisId } },
          etat: { connect: { id: input.etatId } },
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  listMapMarkers: protectedProcedure
    .input(z.object({ crisisId: z.string().min(1) }))
    .query(async ({ ctx, input }) => {
      await ensureVerifiedEtatMember(ctx);

      return ctx.db.mapMarker.findMany({
        where: { crisisId: input.crisisId },
        orderBy: { createdAt: "desc" },
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
          createdBy: { select: { id: true, name: true } },
        },
      });
    }),

  addMapMarker: protectedProcedure
    .input(
      z.object({
        crisisId: z.string().min(1),
        type: z.enum(["RADIUS", "SHELTER"]),
        label: z.string().trim().min(1),
        lat: z.number().min(-90).max(90),
        lng: z.number().min(-180).max(180),
        radius: z.number().int().min(1).optional(),
        etatId: z.string().min(1),
      }).refine(
        (data) => data.type !== "RADIUS" || (data.radius != null && data.radius > 0),
        { message: "Radius is required for RADIUS type", path: ["radius"] },
      ),
    )
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(ctx);
      await checkEditAccess(ctx, input.crisisId, userEtatIds);
      validateUserEtat(userEtatIds, input.etatId);

      return ctx.db.mapMarker.create({
        data: {
          type: input.type,
          label: input.label,
          lat: input.lat,
          lng: input.lng,
          radius: input.type === "RADIUS" ? input.radius : null,
          crisis: { connect: { id: input.crisisId } },
          etat: { connect: { id: input.etatId } },
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),

  removeMapMarker: protectedProcedure
    .input(z.object({ id: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      const userEtatIds = await ensureVerifiedEtatMember(ctx);

      const marker = await ctx.db.mapMarker.findUnique({
        where: { id: input.id },
        select: { crisisId: true },
      });

      if (!marker) {
        throw new TRPCError({ code: "NOT_FOUND" });
      }

      await checkEditAccess(ctx, marker.crisisId, userEtatIds);

      return ctx.db.mapMarker.delete({
        where: { id: input.id },
      });
    }),
});
