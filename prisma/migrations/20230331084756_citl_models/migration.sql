-- CreateTable
CREATE TABLE `IMDCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `iMDCoordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMDCoordinatorSuggestion_iMId_key`(`iMId`),
    INDEX `IMDCoordinatorSuggestion_iMDCoordinatorId_idx`(`iMDCoordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinatorSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL,

    INDEX `IMDCoordinatorSuggestionItem_iMDCoordinatorSuggestionId_idx`(`iMDCoordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedIMDCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedIMDCoordinatorSuggestion_iMDCoordinatorSuggestionId_key`(`iMDCoordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinatorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `iMDCoordinatorId` VARCHAR(191) NOT NULL,

    INDEX `IMDCoordinatorEndorsement_iMId_idx`(`iMId`),
    INDEX `IMDCoordinatorEndorsement_iMDCoordinatorId_idx`(`iMDCoordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CITLDirectorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMDCoordinatorEndorsementId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CITLDirectorEndorsement_iMDCoordinatorEndorsementId_key`(`iMDCoordinatorEndorsementId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
