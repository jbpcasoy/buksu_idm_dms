/*
  Warnings:

  - A unique constraint covering the columns `[userId,notificationId]` on the table `ReadNotification` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `ReadNotification_userId_notificationId_key` ON `ReadNotification`(`userId`, `notificationId`);
