/*
  Warnings:

  - You are about to drop the column `userId` on the `IM` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "IM" DROP CONSTRAINT "IM_userId_fkey";

-- AlterTable
ALTER TABLE "IM" DROP COLUMN "userId";
