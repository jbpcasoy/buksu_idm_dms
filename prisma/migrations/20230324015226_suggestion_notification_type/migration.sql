-- AlterTable
ALTER TABLE `Notification` MODIFY `Type` ENUM('SUBMITTED_PEER_REVIEW', 'SUBMITTED_CHAIRPERSON_REVIEW', 'SUBMITTED_COORDINATOR_REVIEW', 'SUBMITTED_PEER_SUGGESTION', 'SUBMITTED_CHAIRPERSON_SUGGESTION', 'SUBMITTED_COORDINATOR_SUGGESTION') NOT NULL;
