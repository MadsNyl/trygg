import "server-only";

import { db } from "~/server/db";

const DEFAULT_PAGE_SIZE = 10;

type RawSearchParams = Record<string, string | string[] | undefined>;

const getStringParam = (value: string | string[] | undefined) => {
  if (Array.isArray(value)) {
    return value[0];
  }

  return value;
};

export async function getUsers(searchParams: RawSearchParams) {
  const q = getStringParam(searchParams.q)?.trim() ?? "";

  const pageParam = Number(getStringParam(searchParams.page) ?? "1");
  const page = Number.isFinite(pageParam) && pageParam > 0 ? Math.floor(pageParam) : 1;

  const where = q
    ? {
        OR: [
          {
            name: {
              contains: q,
              mode: "insensitive" as const,
            },
          },
          {
            email: {
              contains: q,
              mode: "insensitive" as const,
            },
          },
        ],
      }
    : undefined;

  const [total, users] = await db.$transaction([
    db.user.count({ where }),
    db.user.findMany({
      where,
      orderBy: {
        createdAt: "desc",
      },
      skip: (page - 1) * DEFAULT_PAGE_SIZE,
      take: DEFAULT_PAGE_SIZE,
      select: {
        id: true,
        name: true,
        email: true,
        image: true,
        isVerified: true,
        isAdmin: true,
      },
    }),
  ]);

  const totalPages = Math.max(1, Math.ceil(total / DEFAULT_PAGE_SIZE));

  return {
    users,
    query: q,
    pagination: {
      page,
      pageSize: DEFAULT_PAGE_SIZE,
      total,
      totalPages,
      hasPreviousPage: page > 1,
      hasNextPage: page < totalPages,
    },
  };
}
