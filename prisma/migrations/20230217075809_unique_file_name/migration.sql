/*
  Warnings:

  - A unique constraint covering the columns `[fileName]` on the table `Attachment` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[fileName]` on the table `File` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Attachment_fileName_key" ON "Attachment"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "File_fileName_key" ON "File"("fileName");
