/*
  Warnings:

  - You are about to drop the column `facultyId` on the `ChairpersonReview` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[chairpersonId,iMId]` on the table `ChairpersonReview` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `chairpersonId` to the `ChairpersonReview` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `ChairpersonReview_facultyId_iMId_key` ON `ChairpersonReview`;

-- DropIndex
DROP INDEX `ChairpersonReview_facultyId_idx` ON `ChairpersonReview`;

-- AlterTable
ALTER TABLE `ChairpersonReview` DROP COLUMN `facultyId`,
    ADD COLUMN `chairpersonId` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE INDEX `ChairpersonReview_chairpersonId_idx` ON `ChairpersonReview`(`chairpersonId`);

-- CreateIndex
CREATE UNIQUE INDEX `ChairpersonReview_chairpersonId_iMId_key` ON `ChairpersonReview`(`chairpersonId`, `iMId`);
