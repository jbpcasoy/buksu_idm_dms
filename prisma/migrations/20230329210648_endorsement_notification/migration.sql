/*
  Warnings:

  - A unique constraint covering the columns `[coordinatorEndorsementId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[deanEndorsementId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `coordinatorEndorsementId` VARCHAR(191) NULL,
    ADD COLUMN `deanEndorsementId` VARCHAR(191) NULL,
    MODIFY `Type` ENUM('SUBMITTED_PEER_REVIEW', 'SUBMITTED_CHAIRPERSON_REVIEW', 'SUBMITTED_COORDINATOR_REVIEW', 'SUBMITTED_PEER_SUGGESTION', 'SUBMITTED_CHAIRPERSON_SUGGESTION', 'SUBMITTED_COORDINATOR_SUGGESTION', 'COORDINATOR_ENDORSEMENT', 'DEAN_ENDORSEMENT') NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Notification_coordinatorEndorsementId_key` ON `Notification`(`coordinatorEndorsementId`);

-- CreateIndex
CREATE UNIQUE INDEX `Notification_deanEndorsementId_key` ON `Notification`(`deanEndorsementId`);
