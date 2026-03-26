-- CreateTable
CREATE TABLE "Etat" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "contactPhone" TEXT NOT NULL,
    "contactEmail" TEXT NOT NULL,
    "themeColor" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Etat_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EtatToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,

    CONSTRAINT "_EtatToUser_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_EtatToUser_B_index" ON "_EtatToUser"("B");

-- AddForeignKey
ALTER TABLE "_EtatToUser" ADD CONSTRAINT "_EtatToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Etat"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EtatToUser" ADD CONSTRAINT "_EtatToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;
