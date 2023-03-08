/*
  Warnings:

  - You are about to drop the column `type` on the `IM` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `IM` DROP COLUMN `type`;

-- CreateTable
CREATE TABLE `PeerReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `submitted` BOOLEAN NOT NULL DEFAULT false,

    INDEX `PeerReview_iMId_idx`(`iMId`),
    INDEX `PeerReview_facultyId_idx`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `peerReviewId` VARCHAR(191) NOT NULL,

    INDEX `PeerReviewItem_peerReviewId_idx`(`peerReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
