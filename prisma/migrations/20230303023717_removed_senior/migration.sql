/*
  Warnings:

  - You are about to drop the `ActiveSenior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Senior` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SeniorApproval` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `ActiveSenior`;

-- DropTable
DROP TABLE `Senior`;

-- DropTable
DROP TABLE `SeniorApproval`;

-- CreateTable
CREATE TABLE `PeerApproval` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `departmentApprovalId` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PeerApproval_departmentApprovalId_key`(`departmentApprovalId`),
    INDEX `PeerApproval_facultyId_idx`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
