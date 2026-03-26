-- CreateEnum
CREATE TYPE "MarkerType" AS ENUM ('RADIUS', 'SHELTER');

-- CreateTable
CREATE TABLE "MapMarker" (
    "id" TEXT NOT NULL,
    "type" "MarkerType" NOT NULL,
    "label" TEXT NOT NULL,
    "lat" DOUBLE PRECISION NOT NULL,
    "lng" DOUBLE PRECISION NOT NULL,
    "radius" INTEGER,
    "crisisId" TEXT NOT NULL,
    "etatId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MapMarker_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "MapMarker" ADD CONSTRAINT "MapMarker_crisisId_fkey" FOREIGN KEY ("crisisId") REFERENCES "Crisis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MapMarker" ADD CONSTRAINT "MapMarker_etatId_fkey" FOREIGN KEY ("etatId") REFERENCES "Etat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MapMarker" ADD CONSTRAINT "MapMarker_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
