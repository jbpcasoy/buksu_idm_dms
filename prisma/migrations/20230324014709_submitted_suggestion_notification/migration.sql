/*
  Warnings:

  - A unique constraint covering the columns `[submittedPeerSuggestionId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[submittedChairpersonSuggestionId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[submittedCoordinatorSuggestionId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `submittedChairpersonSuggestionId` VARCHAR(191) NULL,
    ADD COLUMN `submittedCoordinatorSuggestionId` VARCHAR(191) NULL,
    ADD COLUMN `submittedPeerSuggestionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Notification_submittedPeerSuggestionId_key` ON `Notification`(`submittedPeerSuggestionId`);

-- CreateIndex
CREATE UNIQUE INDEX `Notification_submittedChairpersonSuggestionId_key` ON `Notification`(`submittedChairpersonSuggestionId`);

-- CreateIndex
CREATE UNIQUE INDEX `Notification_submittedCoordinatorSuggestionId_key` ON `Notification`(`submittedCoordinatorSuggestionId`);
