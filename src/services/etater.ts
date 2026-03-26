import "server-only";

import { db } from "~/server/db";

export async function getEtater() {
  return db.etat.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      _count: {
        select: { users: true },
      },
    },
  });
}

export async function getEtatDetails(etatId: string) {
  return db.etat.findUnique({
    where: { id: etatId },
    include: {
      users: {
        orderBy: { name: "asc" },
        select: {
          id: true,
          name: true,
          email: true,
          image: true,
          isVerified: true,
          isAdmin: true,
        },
      },
      _count: {
        select: { users: true },
      },
    },
  });
}
