/*
  Warnings:

  - You are about to drop the column `iMId` on the `DeanEndorsement` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[coordinatorEndorsementId]` on the table `DeanEndorsement` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `coordinatorEndorsementId` to the `DeanEndorsement` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `DeanEndorsement_iMId_key` ON `DeanEndorsement`;

-- AlterTable
ALTER TABLE `DeanEndorsement` DROP COLUMN `iMId`,
    ADD COLUMN `coordinatorEndorsementId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `DeanEndorsement_coordinatorEndorsementId_key` ON `DeanEndorsement`(`coordinatorEndorsementId`);
