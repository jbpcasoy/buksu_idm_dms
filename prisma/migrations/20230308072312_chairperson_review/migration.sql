-- CreateTable
CREATE TABLE `ChairpersonReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `chairpersonReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ChairpersonReviewItem_chairpersonReviewId_key`(`chairpersonReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
