/*
  Warnings:

  - Added the required column `Type` to the `Notification` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Notification` ADD COLUMN `Type` ENUM('SUBMITTED_PEER_REVIEW', 'SUBMITTED_CHAIRPERSON_REVIEW', 'SUBMITTED_COORDINATOR_REVIEW') NOT NULL;
