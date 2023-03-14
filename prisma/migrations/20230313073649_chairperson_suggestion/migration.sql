-- CreateTable
CREATE TABLE `ChairpersonSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedChairpersonReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ChairpersonSuggestion_submittedChairpersonReviewId_key`(`submittedChairpersonReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
