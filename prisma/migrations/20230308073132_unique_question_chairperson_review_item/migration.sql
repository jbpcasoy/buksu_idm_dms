/*
  Warnings:

  - A unique constraint covering the columns `[chairpersonReviewId,questionId]` on the table `ChairpersonReviewItem` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX `ChairpersonReviewItem_chairpersonReviewId_key` ON `ChairpersonReviewItem`;

-- CreateIndex
CREATE INDEX `ChairpersonReviewItem_chairpersonReviewId_idx` ON `ChairpersonReviewItem`(`chairpersonReviewId`);

-- CreateIndex
CREATE UNIQUE INDEX `ChairpersonReviewItem_chairpersonReviewId_questionId_key` ON `ChairpersonReviewItem`(`chairpersonReviewId`, `questionId`);
