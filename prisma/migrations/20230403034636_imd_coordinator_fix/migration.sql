/*
  Warnings:

  - A unique constraint covering the columns `[iMId]` on the table `IMDCoordinatorEndorsement` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[iMDCoordinatorId]` on the table `IMDCoordinatorEndorsement` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `IMDCoordinatorEndorsement_iMId_key` ON `IMDCoordinatorEndorsement`(`iMId`);

-- CreateIndex
CREATE UNIQUE INDEX `IMDCoordinatorEndorsement_iMDCoordinatorId_key` ON `IMDCoordinatorEndorsement`(`iMDCoordinatorId`);
