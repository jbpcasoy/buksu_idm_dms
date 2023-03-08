/*
  Warnings:

  - A unique constraint covering the columns `[facultyId,iMId]` on the table `PeerReview` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `PeerReview_facultyId_iMId_key` ON `PeerReview`(`facultyId`, `iMId`);
