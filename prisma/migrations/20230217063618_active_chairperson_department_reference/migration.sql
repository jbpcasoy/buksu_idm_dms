/*
  Warnings:

  - A unique constraint covering the columns `[departmentId]` on the table `ActiveChairperson` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `ActiveChairperson` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActiveChairperson" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChairperson_departmentId_key" ON "ActiveChairperson"("departmentId");

-- AddForeignKey
ALTER TABLE "ActiveChairperson" ADD CONSTRAINT "ActiveChairperson_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
