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

const crisisInput = z.object({
  title: z.string().trim().min(1).max(200),
  description: z.string().trim().min(1),
  what: z.string().trim().min(1),
  how: z.string().trim().min(1),
  when: z.coerce.date(),
  severity: z.enum(["LOW", "MEDIUM", "HIGH"]),
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
});
