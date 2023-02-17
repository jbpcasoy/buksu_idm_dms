/*
  Warnings:

  - A unique constraint covering the columns `[departmentId]` on the table `ActiveCoordinator` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `departmentId` to the `ActiveCoordinator` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ActiveCoordinator" ADD COLUMN     "departmentId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ActiveCoordinator_departmentId_key" ON "ActiveCoordinator"("departmentId");

-- AddForeignKey
ALTER TABLE "ActiveCoordinator" ADD CONSTRAINT "ActiveCoordinator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
