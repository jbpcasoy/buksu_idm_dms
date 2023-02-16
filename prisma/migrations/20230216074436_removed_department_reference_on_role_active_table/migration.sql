/*
  Warnings:

  - You are about to drop the column `departmentId` on the `ActiveChairperson` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `ActiveCoordinator` table. All the data in the column will be lost.
  - You are about to drop the column `departmentId` on the `ActiveSenior` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "ActiveChairperson" DROP CONSTRAINT "ActiveChairperson_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "ActiveCoordinator" DROP CONSTRAINT "ActiveCoordinator_departmentId_fkey";

-- DropForeignKey
ALTER TABLE "ActiveSenior" DROP CONSTRAINT "ActiveSenior_departmentId_fkey";

-- DropIndex
DROP INDEX "ActiveChairperson_departmentId_key";

-- DropIndex
DROP INDEX "ActiveCoordinator_departmentId_key";

-- AlterTable
ALTER TABLE "ActiveChairperson" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "ActiveCoordinator" DROP COLUMN "departmentId";

-- AlterTable
ALTER TABLE "ActiveSenior" DROP COLUMN "departmentId";
