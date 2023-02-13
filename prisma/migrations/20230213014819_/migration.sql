/*
  Warnings:

  - You are about to drop the column `fileName` on the `IM` table. All the data in the column will be lost.
  - You are about to drop the column `originalFileName` on the `IM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "IM" DROP COLUMN "fileName",
DROP COLUMN "originalFileName";

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iMId" TEXT NOT NULL,
    "googleDocsUrl" TEXT,

    CONSTRAINT "File_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "File" ADD CONSTRAINT "File_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
