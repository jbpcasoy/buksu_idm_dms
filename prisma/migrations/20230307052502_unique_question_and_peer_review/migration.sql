/*
  Warnings:

  - A unique constraint covering the columns `[peerReviewId,questionId]` on the table `PeerReviewItem` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `PeerReviewItem_peerReviewId_questionId_key` ON `PeerReviewItem`(`peerReviewId`, `questionId`);
