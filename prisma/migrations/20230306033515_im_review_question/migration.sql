/*
  Warnings:

  - A unique constraint covering the columns `[id,title]` on the table `IMReviewSection` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE `IMReviewQuestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `iMReviewSectionId` VARCHAR(191) NOT NULL,
    `iMReviewSectionTitle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMReviewQuestion_question_key`(`question`),
    INDEX `IMReviewQuestion_iMReviewSectionId_iMReviewSectionTitle_idx`(`iMReviewSectionId`, `iMReviewSectionTitle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `IMReviewSection_id_title_key` ON `IMReviewSection`(`id`, `title`);
