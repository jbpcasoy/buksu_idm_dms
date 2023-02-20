/*
  Warnings:

  - A unique constraint covering the columns `[departmentId,facultyId]` on the table `Chairperson` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Chairperson_departmentId_facultyId_key" ON "Chairperson"("departmentId", "facultyId");
