/*
  Warnings:

  - A unique constraint covering the columns `[submittedQamisSuggestionId]` on the table `Notification` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE `IMEvent` ADD COLUMN `submittedQamisSuggestionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `submittedQamisSuggestionId` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `QamisSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `QamisSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QamisSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `QamisSuggestionId` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,

    INDEX `QamisSuggestionItem_QamisSuggestionId_idx`(`QamisSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedQamisSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `QamisSuggestionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedQamisSuggestion_QamisSuggestionId_key`(`QamisSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `Notification_submittedQamisSuggestionId_key` ON `Notification`(`submittedQamisSuggestionId`);
