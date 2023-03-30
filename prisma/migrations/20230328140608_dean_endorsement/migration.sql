-- CreateTable
CREATE TABLE `DeanEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `deanId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DeanEndorsement_iMId_key`(`iMId`),
    INDEX `DeanEndorsement_deanId_idx`(`deanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
