/*
  Warnings:

  - Added the required column `pageNumber` to the `IMDCoordinatorSuggestionItem` table without a default value. This is not possible if the table is not empty.
  - Added the required column `value` to the `IMDCoordinatorSuggestionItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `IMDCoordinatorSuggestionItem` ADD COLUMN `actionTaken` TEXT NULL,
    ADD COLUMN `pageNumber` INTEGER NOT NULL,
    ADD COLUMN `remarks` TEXT NULL,
    ADD COLUMN `value` TEXT NOT NULL;
