-- CreateTable
CREATE TABLE `CoordinatorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoordinatorEndorsement_iMId_key`(`iMId`),
    INDEX `CoordinatorEndorsement_coordinatorId_idx`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
