-- CreateTable
CREATE TABLE `SubmittedPeerSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `peerSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedPeerSuggestion_peerSuggestionId_key`(`peerSuggestionId`),
    UNIQUE INDEX `SubmittedPeerSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `coordinatorSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedCoordinatorSuggestion_coordinatorSuggestionId_key`(`coordinatorSuggestionId`),
    UNIQUE INDEX `SubmittedCoordinatorSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedChairpersonSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `chairpersonSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedChairpersonSuggestion_chairpersonSuggestionId_key`(`chairpersonSuggestionId`),
    UNIQUE INDEX `SubmittedChairpersonSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
