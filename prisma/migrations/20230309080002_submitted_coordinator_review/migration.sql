-- CreateTable
CREATE TABLE `SubmittedCoordinatorReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `coordinatorReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedCoordinatorReview_iMId_key`(`iMId`),
    UNIQUE INDEX `SubmittedCoordinatorReview_coordinatorReviewId_key`(`coordinatorReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
