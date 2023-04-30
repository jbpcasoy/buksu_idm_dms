/*
  Warnings:

  - You are about to drop the column `updatedAT` on the `activefile` table. All the data in the column will be lost.
  - Added the required column `updatedAt` to the `ActiveFile` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `activefile` DROP COLUMN `updatedAT`,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
