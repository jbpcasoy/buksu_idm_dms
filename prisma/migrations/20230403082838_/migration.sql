/*
  Warnings:

  - A unique constraint covering the columns `[submittedIMDCoordinatorSuggestionId]` on the table `IMDCoordinatorEndorsement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `submittedIMDCoordinatorSuggestionId` to the `IMDCoordinatorEndorsement` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `IMDCoordinatorEndorsement` ADD COLUMN `submittedIMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `IMDCoordinatorEndorsement_submittedIMDCoordinatorSuggestionI_key` ON `IMDCoordinatorEndorsement`(`submittedIMDCoordinatorSuggestionId`);
