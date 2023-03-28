-- CreateTable
CREATE TABLE `Dean` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dean_facultyId_key`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveDean` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deanId` VARCHAR(191) NOT NULL,
    `collegeId` VARCHAR(191) NOT NULL,
    `activeFacultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveDean_deanId_key`(`deanId`),
    UNIQUE INDEX `ActiveDean_collegeId_key`(`collegeId`),
    UNIQUE INDEX `ActiveDean_activeFacultyId_key`(`activeFacultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
