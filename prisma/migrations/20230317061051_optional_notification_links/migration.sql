-- AlterTable
ALTER TABLE `Notification` MODIFY `submittedPeerReviewId` VARCHAR(191) NULL,
    MODIFY `submittedChairpersonReviewId` VARCHAR(191) NULL,
    MODIFY `submittedCoordinatorReviewId` VARCHAR(191) NULL;
