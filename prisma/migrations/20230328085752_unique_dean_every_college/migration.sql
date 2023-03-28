/*
  Warnings:

  - You are about to drop the column `collegeId` on the `ActiveDean` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[collegeId]` on the table `Dean` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `collegeId` to the `Dean` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ActiveDean_collegeId_key` ON `ActiveDean`;

-- AlterTable
ALTER TABLE `ActiveDean` DROP COLUMN `collegeId`;

-- AlterTable
ALTER TABLE `Dean` ADD COLUMN `collegeId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Dean_collegeId_key` ON `Dean`(`collegeId`);
