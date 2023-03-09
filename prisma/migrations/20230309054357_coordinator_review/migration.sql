-- CreateTable
CREATE TABLE `CoordinatorReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorReview_coordinatorId_idx`(`coordinatorId`),
    INDEX `CoordinatorReview_iMId_idx`(`iMId`),
    UNIQUE INDEX `CoordinatorReview_coordinatorId_iMId_key`(`coordinatorId`, `iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
