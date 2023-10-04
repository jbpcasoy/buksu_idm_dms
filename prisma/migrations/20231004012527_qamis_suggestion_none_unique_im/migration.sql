-- DropIndex
DROP INDEX `QamisSuggestion_iMId_key` ON `QamisSuggestion`;

-- CreateIndex
CREATE INDEX `QamisSuggestion_iMId_idx` ON `QamisSuggestion`(`iMId`);
