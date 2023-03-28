-- DropIndex
DROP INDEX `Dean_collegeId_key` ON `Dean`;

-- CreateIndex
CREATE INDEX `Dean_collegeId_idx` ON `Dean`(`collegeId`);
