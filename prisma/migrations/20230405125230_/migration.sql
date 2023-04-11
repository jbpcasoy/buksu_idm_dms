-- AlterTable
ALTER TABLE `imevent` ADD COLUMN `submittedChairpersonSuggestionId` VARCHAR(191) NULL;

-- CreateIndex
CREATE INDEX `IMEvent_submittedChairpersonSuggestionId_idx` ON `IMEvent`(`submittedChairpersonSuggestionId`);
