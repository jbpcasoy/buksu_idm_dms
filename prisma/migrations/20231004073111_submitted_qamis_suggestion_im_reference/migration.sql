/*
  Warnings:

  - Added the required column `iMId` to the `SubmittedQamisSuggestion` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `SubmittedQamisSuggestion` ADD COLUMN `iMId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `SubmittedQamisSuggestion_iMId_idx` ON `SubmittedQamisSuggestion`(`iMId`);
