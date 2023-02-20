/*
  Warnings:

  - You are about to drop the column `departmentId` on the `Chairperson` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Chairperson" DROP CONSTRAINT "Chairperson_departmentId_fkey";

-- DropIndex
DROP INDEX "Chairperson_departmentId_facultyId_key";

-- AlterTable
ALTER TABLE "Chairperson" DROP COLUMN "departmentId";
