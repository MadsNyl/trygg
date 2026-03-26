-- CreateTable
CREATE TABLE "TimelineEntry" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "crisisId" TEXT NOT NULL,
    "etatId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TimelineEntry_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Measure" (
    "id" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    "severity" "Severity" NOT NULL,
    "crisisId" TEXT NOT NULL,
    "etatId" TEXT NOT NULL,
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Measure_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TimelineEntry" ADD CONSTRAINT "TimelineEntry_crisisId_fkey" FOREIGN KEY ("crisisId") REFERENCES "Crisis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEntry" ADD CONSTRAINT "TimelineEntry_etatId_fkey" FOREIGN KEY ("etatId") REFERENCES "Etat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TimelineEntry" ADD CONSTRAINT "TimelineEntry_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_crisisId_fkey" FOREIGN KEY ("crisisId") REFERENCES "Crisis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_etatId_fkey" FOREIGN KEY ("etatId") REFERENCES "Etat"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Measure" ADD CONSTRAINT "Measure_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
