/*
  Warnings:

  - Added the required column `ownerId` to the `IM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IM" ADD COLUMN     "ownerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "IM" ADD CONSTRAINT "IM_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
