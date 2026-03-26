-- CreateEnum
CREATE TYPE "Severity" AS ENUM ('LOW', 'MEDIUM', 'HIGH');

-- CreateTable
CREATE TABLE "Crisis" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "what" TEXT NOT NULL,
    "how" TEXT NOT NULL,
    "when" TIMESTAMP(3) NOT NULL,
    "severity" "Severity" NOT NULL DEFAULT 'LOW',
    "createdById" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Crisis_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CrisisToEtat" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_CrisisToEtat_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CrisisToEtat_B_index" ON "_CrisisToEtat"("B");

-- AddForeignKey
ALTER TABLE "Crisis" ADD CONSTRAINT "Crisis_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrisisToEtat" ADD CONSTRAINT "_CrisisToEtat_A_fkey" FOREIGN KEY ("A") REFERENCES "Crisis"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CrisisToEtat" ADD CONSTRAINT "_CrisisToEtat_B_fkey" FOREIGN KEY ("B") REFERENCES "Etat"("id") ON DELETE CASCADE ON UPDATE CASCADE;
