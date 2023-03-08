/*
  Warnings:

  - You are about to drop the column `submitted` on the `PeerReview` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `PeerReview` DROP COLUMN `submitted`;

-- CreateTable
CREATE TABLE `SubmittedPeerReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `peerReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedPeerReview_iMId_key`(`iMId`),
    UNIQUE INDEX `SubmittedPeerReview_peerReviewId_key`(`peerReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
