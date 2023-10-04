/*
  Warnings:

  - You are about to drop the column `QamisSuggestionId` on the `QamisSuggestionItem` table. All the data in the column will be lost.
  - You are about to drop the column `QamisSuggestionId` on the `SubmittedQamisSuggestion` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[qamisSuggestionId]` on the table `SubmittedQamisSuggestion` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `qamisSuggestionId` to the `QamisSuggestionItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `qamisSuggestionId` to the `SubmittedQamisSuggestion` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `QamisSuggestionItem_QamisSuggestionId_idx` ON `QamisSuggestionItem`;

-- DropIndex
DROP INDEX `SubmittedQamisSuggestion_QamisSuggestionId_key` ON `SubmittedQamisSuggestion`;

-- AlterTable
ALTER TABLE `QamisSuggestionItem` DROP COLUMN `QamisSuggestionId`,
    ADD COLUMN `qamisSuggestionId` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `SubmittedQamisSuggestion` DROP COLUMN `QamisSuggestionId`,
    ADD COLUMN `qamisSuggestionId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `QamisSuggestionItem_qamisSuggestionId_idx` ON `QamisSuggestionItem`(`qamisSuggestionId`);

-- CreateIndex
CREATE UNIQUE INDEX `SubmittedQamisSuggestion_qamisSuggestionId_key` ON `SubmittedQamisSuggestion`(`qamisSuggestionId`);
