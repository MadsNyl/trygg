import { TRPCError } from "@trpc/server";
import { z } from "zod";

import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";

const ensureAdmin = (isAdmin: boolean | undefined) => {
  if (!isAdmin) {
    throw new TRPCError({ code: "FORBIDDEN" });
  }
};

export const usersRouter = createTRPCRouter({
  toggleIsVerified: protectedProcedure
    .input(z.object({ userId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const user = await ctx.db.user.findUnique({
        where: { id: input.userId },
        select: { id: true, isVerified: true },
      });

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      return ctx.db.user.update({
        where: { id: user.id },
        data: { isVerified: !user.isVerified },
        select: { id: true, isVerified: true },
      });
    }),

  toggleIsAdmin: protectedProcedure
    .input(z.object({ userId: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      ensureAdmin(ctx.session.user.isAdmin);

      const user = await ctx.db.user.findUnique({
        where: { id: input.userId },
        select: { id: true, isAdmin: true },
      });

      if (!user) {
        throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
      }

      return ctx.db.user.update({
        where: { id: user.id },
        data: { isAdmin: !user.isAdmin },
        select: { id: true, isAdmin: true },
      });
    }),

  getProfile: protectedProcedure.query(async ({ ctx }) => {
    const user = await ctx.db.user.findUnique({
      where: { id: ctx.session.user.id },
      select: {
        id: true,
        name: true,
        email: true,
        emailVerified: true,
        isVerified: true,
        isAdmin: true,
        createdAt: true,
        etater: {
          select: {
            id: true,
            title: true,
            themeColor: true,
            contactEmail: true,
            contactPhone: true,
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({ code: "NOT_FOUND", message: "User not found" });
    }

    return user;
  }),

  updateName: protectedProcedure
    .input(z.object({ name: z.string().min(1).max(255) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.user.update({
        where: { id: ctx.session.user.id },
        data: { name: input.name },
        select: { id: true, name: true },
      });
    }),

  deleteAccount: protectedProcedure
    .input(z.object({ confirmEmail: z.string().email() }))
    .mutation(async ({ ctx, input }) => {
      const user = await ctx.db.user.findUnique({
        where: { id: ctx.session.user.id },
        select: { email: true },
      });

      if (user?.email !== input.confirmEmail) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "E-postadressen stemmer ikke overens",
        });
      }

      await ctx.db.user.delete({
        where: { id: ctx.session.user.id },
      });

      return { success: true };
    }),
});
