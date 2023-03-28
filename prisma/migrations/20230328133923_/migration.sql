/*
  Warnings:

  - A unique constraint covering the columns `[collegeId]` on the table `ActiveDean` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collegeId` to the `ActiveDean` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ActiveDean` ADD COLUMN `collegeId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ActiveDean_collegeId_key` ON `ActiveDean`(`collegeId`);
