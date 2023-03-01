/*
  Warnings:

  - A unique constraint covering the columns `[activeFacultyId]` on the table `ActiveChairperson` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activeFacultyId]` on the table `ActiveCoordinator` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[activeFacultyId]` on the table `ActiveSenior` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `activeFacultyId` to the `ActiveChairperson` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activeFacultyId` to the `ActiveCoordinator` table without a default value. This is not possible if the table is not empty.
  - Added the required column `activeFacultyId` to the `ActiveSenior` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `ActiveChairperson` ADD COLUMN `activeFacultyId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ActiveCoordinator` ADD COLUMN `activeFacultyId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `ActiveSenior` ADD COLUMN `activeFacultyId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `ActiveChairperson_activeFacultyId_key` ON `ActiveChairperson`(`activeFacultyId`);

-- CreateIndex
CREATE UNIQUE INDEX `ActiveCoordinator_activeFacultyId_key` ON `ActiveCoordinator`(`activeFacultyId`);

-- CreateIndex
CREATE UNIQUE INDEX `ActiveSenior_activeFacultyId_key` ON `ActiveSenior`(`activeFacultyId`);
