-- CreateTable
CREATE TABLE `CoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedCoordinatorReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoordinatorSuggestion_submittedCoordinatorReviewId_key`(`submittedCoordinatorReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
