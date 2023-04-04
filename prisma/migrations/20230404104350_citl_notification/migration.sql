/*
  Warnings:

  - A unique constraint covering the columns `[submittedIMDCoordinatorSuggestionId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[iMDCoordinatorEndorsementId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[cITLDirectorEndorsementId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `cITLDirectorEndorsementId` VARCHAR(191) NULL,
    ADD COLUMN `iMDCoordinatorEndorsementId` VARCHAR(191) NULL,
    ADD COLUMN `submittedIMDCoordinatorSuggestionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Notification_submittedIMDCoordinatorSuggestionId_key` ON `Notification`(`submittedIMDCoordinatorSuggestionId`);

-- CreateIndex
CREATE UNIQUE INDEX `Notification_iMDCoordinatorEndorsementId_key` ON `Notification`(`iMDCoordinatorEndorsementId`);

-- CreateIndex
CREATE UNIQUE INDEX `Notification_cITLDirectorEndorsementId_key` ON `Notification`(`cITLDirectorEndorsementId`);
