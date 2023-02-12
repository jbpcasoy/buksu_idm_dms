/*
  Warnings:

  - Added the required column `originalFileName` to the `IM` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "IM" ADD COLUMN     "originalFileName" TEXT NOT NULL;
