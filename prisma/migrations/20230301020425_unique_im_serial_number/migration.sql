/*
  Warnings:

  - A unique constraint covering the columns `[serialNumber]` on the table `IM` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `IM_serialNumber_key` ON `IM`(`serialNumber`);
