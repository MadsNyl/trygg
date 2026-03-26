import "server-only";

import { db } from "~/server/db";

export async function getCrises(userId: string, userEtatIds: string[]) {
  const crises = await db.crisis.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      createdBy: { select: { id: true, name: true } },
      allowedEtater: { select: { id: true, title: true } },
    },
  });

  return crises.map((crisis) => {
    const allowedIds = crisis.allowedEtater.map((e) => e.id);
    const canEdit =
      crisis.createdBy.id === userId ||
      allowedIds.length === 0 ||
      userEtatIds.some((id) => allowedIds.includes(id));

    return { ...crisis, canEdit };
  });
}

export async function getTimelineEntries(crisisId: string) {
  return db.timelineEntry.findMany({
    where: { crisisId },
    orderBy: { createdAt: "desc" },
    include: {
      etat: { select: { id: true, title: true, themeColor: true } },
      createdBy: { select: { id: true, name: true } },
    },
  });
}

export async function getMeasures(crisisId: string) {
  return db.measure.findMany({
    where: { crisisId },
    orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
    include: {
      etat: { select: { id: true, title: true, themeColor: true } },
      createdBy: { select: { id: true, name: true } },
    },
  });
}
