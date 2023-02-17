/*
  Warnings:

  - A unique constraint covering the columns `[iMId]` on the table `ActiveFile` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `iMId` to the `ActiveFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActiveFile" ADD COLUMN     "iMId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFile_iMId_key" ON "ActiveFile"("iMId");

-- AddForeignKey
ALTER TABLE "ActiveFile" ADD CONSTRAINT "ActiveFile_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
