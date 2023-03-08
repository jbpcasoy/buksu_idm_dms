-- CreateTable
CREATE TABLE `ChairpersonReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    INDEX `ChairpersonReview_iMId_idx`(`iMId`),
    INDEX `ChairpersonReview_facultyId_idx`(`facultyId`),
    UNIQUE INDEX `ChairpersonReview_facultyId_iMId_key`(`facultyId`, `iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
