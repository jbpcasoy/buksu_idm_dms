-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedPeerReviewId` VARCHAR(191) NOT NULL,
    `submittedChairpersonReviewId` VARCHAR(191) NOT NULL,
    `submittedCoordinatorReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Notification_submittedPeerReviewId_key`(`submittedPeerReviewId`),
    UNIQUE INDEX `Notification_submittedChairpersonReviewId_key`(`submittedChairpersonReviewId`),
    UNIQUE INDEX `Notification_submittedCoordinatorReviewId_key`(`submittedCoordinatorReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReadNotification` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `notificationId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `ReadNotification_notificationId_idx`(`notificationId`),
    INDEX `ReadNotification_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
