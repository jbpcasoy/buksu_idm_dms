-- CreateTable
CREATE TABLE `CoordinatorSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,
    `coordinatorSuggestionId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorSuggestionItem_coordinatorSuggestionId_idx`(`coordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
