/*
  Warnings:

  - Added the required column `actionPageNumber` to the `QamisSuggestionItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `QamisSuggestionItem` ADD COLUMN `actionPageNumber` INTEGER NOT NULL;
