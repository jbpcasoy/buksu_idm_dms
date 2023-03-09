-- CreateTable
CREATE TABLE `CoordinatorReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `coordinatorReviewId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorReviewItem_coordinatorReviewId_idx`(`coordinatorReviewId`),
    UNIQUE INDEX `CoordinatorReviewItem_coordinatorReviewId_questionId_key`(`coordinatorReviewId`, `questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
