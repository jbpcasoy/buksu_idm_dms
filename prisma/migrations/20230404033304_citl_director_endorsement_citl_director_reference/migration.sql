/*
  Warnings:

  - Added the required column `cITLDirectorId` to the `CITLDirectorEndorsement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CITLDirectorEndorsement` ADD COLUMN `cITLDirectorId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `CITLDirectorEndorsement_cITLDirectorId_idx` ON `CITLDirectorEndorsement`(`cITLDirectorId`);
