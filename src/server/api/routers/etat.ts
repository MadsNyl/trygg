import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const ensureAdmin = (isAdmin: boolean | undefined) => {
  if (!isAdmin) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
};

const hexColorRegex = /^#([0-9A-Fa-f]{6})$/;

export const etatRouter = createTRPCRouter({
  list: protectedProcedure.query(({ ctx }) => {
    ensureAdmin(ctx.session.user.isAdmin);

    return ctx.db.etat.findMany({
      orderBy: { createdAt: "desc" },
      include: {
        _count: {
          select: { users: true },
        },
      },
    });
  }),

  create: protectedProcedure
    .input(
      z.object({
        title: z.string().trim().min(1).max(120),
        contactPhone: z.string().trim().min(3).max(40),
        contactEmail: z.string().trim().email(),
        themeColor: z.string().regex(hexColorRegex),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      return ctx.db.etat.create({
        data: {
          title: input.title,
          contactPhone: input.contactPhone,
          contactEmail: input.contactEmail,
          themeColor: input.themeColor,
        },
      });
    }),

  update: protectedProcedure
    .input(
      z.object({
        etatId: z.string().min(1),
        title: z.string().trim().min(1).max(120),
        contactPhone: z.string().trim().min(3).max(40),
        contactEmail: z.string().trim().email(),
        themeColor: z.string().regex(hexColorRegex),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const etat = await ctx.db.etat.findUnique({
        where: { id: input.etatId },
        select: { id: true },
      });

      if (!etat) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Etat not found" });
      }

      return ctx.db.etat.update({
        where: { id: etat.id },
        data: {
          title: input.title,
          contactPhone: input.contactPhone,
          contactEmail: input.contactEmail,
          themeColor: input.themeColor,
        },
      });
    }),

  removeUser: protectedProcedure
    .input(
      z.object({
        etatId: z.string().min(1),
        userId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const etat = await ctx.db.etat.findUnique({
        where: { id: input.etatId },
        select: { id: true },
      });

      if (!etat) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Etat not found" });
      }

      return ctx.db.etat.update({
        where: { id: etat.id },
        data: {
          users: {
            disconnect: {
              id: input.userId,
            },
          },
        },
        select: { id: true },
      });
    }),

  addUser: protectedProcedure
    .input(
      z.object({
        etatId: z.string().min(1),
        userId: z.string().min(1),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const etat = await ctx.db.etat.findUnique({
        where: { id: input.etatId },
        select: { id: true },
      });

      if (!etat) {
        throw new TRPCError({ code: "NOT_FOUND", message: "Etat not found" });
      }

      return ctx.db.etat.update({
        where: { id: etat.id },
        data: {
          users: {
            connect: {
              id: input.userId,
            },
          },
        },
        select: { id: true },
      });
    }),

  searchUsersByName: protectedProcedure
    .input(
      z.object({
        etatId: z.string().min(1),
        query: z.string().trim().max(120),
      }),
    )
    .query(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const q = input.query.trim();
      if (q.length < 2) {
        return [];
      }

      return ctx.db.user.findMany({
        where: {
          name: {
            contains: q,
            mode: "insensitive",
          },
          etater: {
            none: {
              id: input.etatId,
            },
          },
        },
        orderBy: { name: "asc" },
        take: 10,
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
        },
      });
    }),
});
