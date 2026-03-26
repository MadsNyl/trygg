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

export async function getPublicCrises(filters?: {
  search?: string;
  severity?: "LOW" | "MEDIUM" | "HIGH";
  location?: string;
}) {
  return db.crisis.findMany({
    where: {
      ...(filters?.search && {
        OR: [
          { title: { contains: filters.search, mode: "insensitive" as const } },
          {
            description: {
              contains: filters.search,
              mode: "insensitive" as const,
            },
          },
        ],
      }),
      ...(filters?.severity && { severity: filters.severity }),
      ...(filters?.location && { location: filters.location }),
    },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      title: true,
      severity: true,
      location: true,
      when: true,
      createdAt: true,
    },
  });
}

export async function getPublicCrisisById(id: string) {
  return db.crisis.findUnique({
    where: { id },
    include: {
      timelineEntries: {
        orderBy: { createdAt: "desc" },
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
      measures: {
        orderBy: [{ severity: "desc" }, { createdAt: "desc" }],
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
      mapMarkers: {
        include: {
          etat: { select: { id: true, title: true, themeColor: true } },
        },
      },
    },
  });
}

export async function getDistinctLocations() {
  const results = await db.crisis.findMany({
    where: { location: { not: null } },
    select: { location: true },
    distinct: ["location"],
    orderBy: { location: "asc" },
  });

  return results
    .map((r) => r.location)
    .filter((l): l is string => l !== null);
}
