-- CreateTable
CREATE TABLE `Account` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `provider` VARCHAR(191) NOT NULL,
    `providerAccountId` VARCHAR(191) NOT NULL,
    `refresh_token` TEXT NULL,
    `access_token` TEXT NULL,
    `expires_at` INTEGER NULL,
    `token_type` VARCHAR(191) NULL,
    `scope` VARCHAR(191) NULL,
    `id_token` TEXT NULL,
    `session_state` VARCHAR(191) NULL,

    INDEX `Account_userId_idx`(`userId`),
    UNIQUE INDEX `Account_provider_providerAccountId_key`(`provider`, `providerAccountId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Session` (
    `id` VARCHAR(191) NOT NULL,
    `sessionToken` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Session_sessionToken_key`(`sessionToken`),
    INDEX `Session_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `emailVerified` DATETIME(3) NULL,
    `image` VARCHAR(191) NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `VerificationToken` (
    `identifier` VARCHAR(191) NOT NULL,
    `token` VARCHAR(191) NOT NULL,
    `expires` DATETIME(3) NOT NULL,

    UNIQUE INDEX `VerificationToken_token_key`(`token`),
    UNIQUE INDEX `VerificationToken_identifier_token_key`(`identifier`, `token`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IM` (
    `id` VARCHAR(191) NOT NULL,
    `serialNumber` VARCHAR(191) NULL,
    `title` VARCHAR(191) NOT NULL,
    `status` ENUM('DRAFT', 'SUBMITTED', 'DEPARTMENT_REVIEWED', 'DEPARTMENT_REVISED', 'DEPARTMENT_ENDORSED', 'CITL_REVIEWED', 'CITL_REVISED', 'CITL_ENDORSED') NOT NULL DEFAULT 'DRAFT',
    `ownerId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `authors` TEXT NULL,
    `type` ENUM('MODULE', 'COURSE_FILE', 'WORKTEXT', 'TEXTBOOK') NOT NULL DEFAULT 'MODULE',

    UNIQUE INDEX `IM_serialNumber_key`(`serialNumber`),
    INDEX `IM_ownerId_idx`(`ownerId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `File` (
    `id` VARCHAR(191) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `originalFileName` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `iMId` VARCHAR(191) NOT NULL,
    `googleDocsUrl` VARCHAR(191) NULL,

    UNIQUE INDEX `File_fileName_key`(`fileName`),
    INDEX `File_iMId_idx`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveFile` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAT` DATETIME(3) NOT NULL,
    `fileId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveFile_fileId_key`(`fileId`),
    UNIQUE INDEX `ActiveFile_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `College` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `College_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Department` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `collegeId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Department_name_key`(`name`),
    INDEX `Department_collegeId_idx`(`collegeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Faculty` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    INDEX `Faculty_departmentId_idx`(`departmentId`),
    UNIQUE INDEX `Faculty_userId_departmentId_key`(`userId`, `departmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveFaculty` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveFaculty_facultyId_key`(`facultyId`),
    UNIQUE INDEX `ActiveFaculty_userId_key`(`userId`),
    INDEX `ActiveFaculty_departmentId_idx`(`departmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Chairperson` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Chairperson_facultyId_key`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Coordinator` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Coordinator_facultyId_key`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveCoordinator` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,
    `activeFacultyId` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveCoordinator_coordinatorId_key`(`coordinatorId`),
    UNIQUE INDEX `ActiveCoordinator_activeFacultyId_key`(`activeFacultyId`),
    UNIQUE INDEX `ActiveCoordinator_departmentId_key`(`departmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveChairperson` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `chairpersonId` VARCHAR(191) NOT NULL,
    `activeFacultyId` VARCHAR(191) NOT NULL,
    `departmentId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveChairperson_chairpersonId_key`(`chairpersonId`),
    UNIQUE INDEX `ActiveChairperson_activeFacultyId_key`(`activeFacultyId`),
    UNIQUE INDEX `ActiveChairperson_departmentId_key`(`departmentId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DepartmentApproval` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DepartmentApproval_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerApproval` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `departmentApprovalId` VARCHAR(191) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PeerApproval_departmentApprovalId_key`(`departmentApprovalId`),
    INDEX `PeerApproval_facultyId_idx`(`facultyId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorApproval` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `departmentApprovalId` VARCHAR(191) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoordinatorApproval_departmentApprovalId_key`(`departmentApprovalId`),
    INDEX `CoordinatorApproval_coordinatorId_idx`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChairpersonApproval` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `departmentApprovalId` VARCHAR(191) NOT NULL,
    `chairpersonId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ChairpersonApproval_departmentApprovalId_key`(`departmentApprovalId`),
    INDEX `ChairpersonApproval_chairpersonId_idx`(`chairpersonId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attachment` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `originalFileName` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Attachment_fileName_key`(`fileName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMReviewSection` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMReviewSection_title_key`(`title`),
    UNIQUE INDEX `IMReviewSection_id_title_key`(`id`, `title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMReviewQuestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `question` VARCHAR(191) NOT NULL,
    `iMReviewSectionId` VARCHAR(191) NOT NULL,
    `iMReviewSectionTitle` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMReviewQuestion_question_key`(`question`),
    INDEX `IMReviewQuestion_iMReviewSectionId_iMReviewSectionTitle_idx`(`iMReviewSectionId`, `iMReviewSectionTitle`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    INDEX `PeerReview_iMId_idx`(`iMId`),
    INDEX `PeerReview_facultyId_idx`(`facultyId`),
    UNIQUE INDEX `PeerReview_facultyId_iMId_key`(`facultyId`, `iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `peerReviewId` VARCHAR(191) NOT NULL,

    INDEX `PeerReviewItem_peerReviewId_idx`(`peerReviewId`),
    UNIQUE INDEX `PeerReviewItem_peerReviewId_questionId_key`(`peerReviewId`, `questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedPeerReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `peerReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedPeerReview_iMId_key`(`iMId`),
    UNIQUE INDEX `SubmittedPeerReview_peerReviewId_key`(`peerReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChairpersonReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `chairpersonId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    INDEX `ChairpersonReview_iMId_idx`(`iMId`),
    INDEX `ChairpersonReview_chairpersonId_idx`(`chairpersonId`),
    UNIQUE INDEX `ChairpersonReview_chairpersonId_iMId_key`(`chairpersonId`, `iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChairpersonReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `chairpersonReviewId` VARCHAR(191) NOT NULL,

    INDEX `ChairpersonReviewItem_chairpersonReviewId_idx`(`chairpersonReviewId`),
    UNIQUE INDEX `ChairpersonReviewItem_chairpersonReviewId_questionId_key`(`chairpersonReviewId`, `questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedChairpersonReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `chairpersonReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedChairpersonReview_iMId_key`(`iMId`),
    UNIQUE INDEX `SubmittedChairpersonReview_chairpersonReviewId_key`(`chairpersonReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorReview_coordinatorId_idx`(`coordinatorId`),
    INDEX `CoordinatorReview_iMId_idx`(`iMId`),
    UNIQUE INDEX `CoordinatorReview_coordinatorId_iMId_key`(`coordinatorId`, `iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorReviewItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `questionId` VARCHAR(191) NOT NULL,
    `answer` VARCHAR(191) NOT NULL,
    `coordinatorReviewId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorReviewItem_coordinatorReviewId_idx`(`coordinatorReviewId`),
    UNIQUE INDEX `CoordinatorReviewItem_coordinatorReviewId_questionId_key`(`coordinatorReviewId`, `questionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedCoordinatorReview` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `coordinatorReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedCoordinatorReview_iMId_key`(`iMId`),
    UNIQUE INDEX `SubmittedCoordinatorReview_coordinatorReviewId_key`(`coordinatorReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedPeerReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `PeerSuggestion_submittedPeerReviewId_key`(`submittedPeerReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PeerSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `peerSuggestionId` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,

    INDEX `PeerSuggestionItem_peerSuggestionId_idx`(`peerSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChairpersonSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedChairpersonReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ChairpersonSuggestion_submittedChairpersonReviewId_key`(`submittedChairpersonReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ChairpersonSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `chairpersonSuggestionId` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,

    INDEX `ChairpersonSuggestionItem_chairpersonSuggestionId_idx`(`chairpersonSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `submittedCoordinatorReviewId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoordinatorSuggestion_submittedCoordinatorReviewId_key`(`submittedCoordinatorReviewId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,
    `coordinatorSuggestionId` VARCHAR(191) NOT NULL,

    INDEX `CoordinatorSuggestionItem_coordinatorSuggestionId_idx`(`coordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Notification` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `Type` ENUM('SUBMITTED_PEER_REVIEW', 'SUBMITTED_CHAIRPERSON_REVIEW', 'SUBMITTED_COORDINATOR_REVIEW', 'SUBMITTED_PEER_SUGGESTION', 'SUBMITTED_CHAIRPERSON_SUGGESTION', 'SUBMITTED_COORDINATOR_SUGGESTION', 'COORDINATOR_ENDORSEMENT', 'DEAN_ENDORSEMENT', 'SUBMITTED_IMD_COORDINATOR_SUGGESTION', 'IMD_COORDINATOR_ENDORSEMENT', 'CITL_DIRECTOR_ENDORSEMENT') NOT NULL,
    `submittedPeerReviewId` VARCHAR(191) NULL,
    `submittedChairpersonReviewId` VARCHAR(191) NULL,
    `submittedCoordinatorReviewId` VARCHAR(191) NULL,
    `submittedPeerSuggestionId` VARCHAR(191) NULL,
    `submittedChairpersonSuggestionId` VARCHAR(191) NULL,
    `submittedCoordinatorSuggestionId` VARCHAR(191) NULL,
    `coordinatorEndorsementId` VARCHAR(191) NULL,
    `deanEndorsementId` VARCHAR(191) NULL,
    `submittedIMDCoordinatorSuggestionId` VARCHAR(191) NULL,
    `iMDCoordinatorEndorsementId` VARCHAR(191) NULL,
    `cITLDirectorEndorsementId` VARCHAR(191) NULL,

    UNIQUE INDEX `Notification_submittedPeerReviewId_key`(`submittedPeerReviewId`),
    UNIQUE INDEX `Notification_submittedChairpersonReviewId_key`(`submittedChairpersonReviewId`),
    UNIQUE INDEX `Notification_submittedCoordinatorReviewId_key`(`submittedCoordinatorReviewId`),
    UNIQUE INDEX `Notification_submittedPeerSuggestionId_key`(`submittedPeerSuggestionId`),
    UNIQUE INDEX `Notification_submittedChairpersonSuggestionId_key`(`submittedChairpersonSuggestionId`),
    UNIQUE INDEX `Notification_submittedCoordinatorSuggestionId_key`(`submittedCoordinatorSuggestionId`),
    UNIQUE INDEX `Notification_coordinatorEndorsementId_key`(`coordinatorEndorsementId`),
    UNIQUE INDEX `Notification_deanEndorsementId_key`(`deanEndorsementId`),
    UNIQUE INDEX `Notification_submittedIMDCoordinatorSuggestionId_key`(`submittedIMDCoordinatorSuggestionId`),
    UNIQUE INDEX `Notification_iMDCoordinatorEndorsementId_key`(`iMDCoordinatorEndorsementId`),
    UNIQUE INDEX `Notification_cITLDirectorEndorsementId_key`(`cITLDirectorEndorsementId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ReadNotification` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `notificationId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    INDEX `ReadNotification_notificationId_idx`(`notificationId`),
    INDEX `ReadNotification_userId_idx`(`userId`),
    UNIQUE INDEX `ReadNotification_userId_notificationId_key`(`userId`, `notificationId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Admin` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Admin_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LoginRole` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `Role` ENUM('ADMIN', 'FACULTY', 'UNAUTHORIZED') NOT NULL,

    UNIQUE INDEX `LoginRole_userId_key`(`userId`),
    INDEX `LoginRole_userId_idx`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedPeerSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `peerSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedPeerSuggestion_peerSuggestionId_key`(`peerSuggestionId`),
    UNIQUE INDEX `SubmittedPeerSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `coordinatorSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedCoordinatorSuggestion_coordinatorSuggestionId_key`(`coordinatorSuggestionId`),
    UNIQUE INDEX `SubmittedCoordinatorSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedChairpersonSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `chairpersonSuggestionId` VARCHAR(191) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedChairpersonSuggestion_chairpersonSuggestionId_key`(`chairpersonSuggestionId`),
    UNIQUE INDEX `SubmittedChairpersonSuggestion_iMId_key`(`iMId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoordinatorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `coordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CoordinatorEndorsement_iMId_key`(`iMId`),
    INDEX `CoordinatorEndorsement_coordinatorId_idx`(`coordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DeanEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deanId` VARCHAR(191) NOT NULL,
    `coordinatorEndorsementId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `DeanEndorsement_coordinatorEndorsementId_key`(`coordinatorEndorsementId`),
    INDEX `DeanEndorsement_deanId_idx`(`deanId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dean` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `facultyId` VARCHAR(191) NOT NULL,
    `collegeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Dean_facultyId_key`(`facultyId`),
    INDEX `Dean_collegeId_idx`(`collegeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveDean` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `deanId` VARCHAR(191) NOT NULL,
    `activeFacultyId` VARCHAR(191) NOT NULL,
    `collegeId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveDean_deanId_key`(`deanId`),
    UNIQUE INDEX `ActiveDean_activeFacultyId_key`(`activeFacultyId`),
    UNIQUE INDEX `ActiveDean_collegeId_key`(`collegeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinator` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMDCoordinator_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveIMDCoordinator` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMDCoordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveIMDCoordinator_iMDCoordinatorId_key`(`iMDCoordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CITLDirector` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CITLDirector_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ActiveCITLDirector` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cITLDirectorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `ActiveCITLDirector_cITLDirectorId_key`(`cITLDirectorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `iMDCoordinatorId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMDCoordinatorSuggestion_iMId_key`(`iMId`),
    INDEX `IMDCoordinatorSuggestion_iMDCoordinatorId_idx`(`iMDCoordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinatorSuggestionItem` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `value` TEXT NOT NULL,
    `actionTaken` TEXT NULL,
    `pageNumber` INTEGER NOT NULL,
    `remarks` TEXT NULL,
    `iMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL,

    INDEX `IMDCoordinatorSuggestionItem_iMDCoordinatorSuggestionId_idx`(`iMDCoordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SubmittedIMDCoordinatorSuggestion` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `SubmittedIMDCoordinatorSuggestion_iMDCoordinatorSuggestionId_key`(`iMDCoordinatorSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMDCoordinatorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `iMId` VARCHAR(191) NOT NULL,
    `iMDCoordinatorId` VARCHAR(191) NOT NULL,
    `submittedIMDCoordinatorSuggestionId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `IMDCoordinatorEndorsement_iMId_key`(`iMId`),
    UNIQUE INDEX `IMDCoordinatorEndorsement_submittedIMDCoordinatorSuggestionI_key`(`submittedIMDCoordinatorSuggestionId`),
    INDEX `IMDCoordinatorEndorsement_iMDCoordinatorId_idx`(`iMDCoordinatorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CITLDirectorEndorsement` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `cITLDirectorId` VARCHAR(191) NOT NULL,
    `iMDCoordinatorEndorsementId` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `CITLDirectorEndorsement_iMDCoordinatorEndorsementId_key`(`iMDCoordinatorEndorsementId`),
    INDEX `CITLDirectorEndorsement_cITLDirectorId_idx`(`cITLDirectorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `IMEvent` (
    `id` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `IMEventType` ENUM('IM_CREATED', 'SUBMITTED', 'NEW_VERSION', 'SUBMITTED_PEER_REVIEW', 'SUBMITTED_PEER_SUGGESTION', 'SUBMITTED_COORDINATOR_REVIEW', 'SUBMITTED_COORDINATOR_SUGGESTION', 'SUBMITTED_CHAIRPERSON_REVIEW', 'SUBMITTED_CHAIRPERSON_SUGGESTION', 'DEPARTMENT_REVIEWED', 'DEPARTMENT_REVISED', 'COORDINATOR_ENDORSEMENT', 'DEAN_ENDORSEMENT', 'SUBMITTED_IMD_COORDINATOR_SUGGESTION', 'CITL_REVIEWED', 'CITL_REVISED', 'IMD_COORDINATOR_ENDORSEMENT', 'CITL_DIRECTOR_ENDORSEMENT') NOT NULL,
    `iMId` VARCHAR(191) NULL,
    `fileId` VARCHAR(191) NULL,
    `submittedPeerReviewId` VARCHAR(191) NULL,
    `submittedPeerSuggestionId` VARCHAR(191) NULL,
    `submittedCoordinatorReviewId` VARCHAR(191) NULL,
    `submittedCoordinatorSuggestionId` VARCHAR(191) NULL,
    `submittedChairpersonReviewId` VARCHAR(191) NULL,
    `submittedChairpersonSuggestionId` VARCHAR(191) NULL,
    `coordinatorEndorsementId` VARCHAR(191) NULL,
    `deanEndorsementId` VARCHAR(191) NULL,
    `submittedIMDCoordinatorSuggestionId` VARCHAR(191) NULL,
    `iMDCoordinatorEndorsementId` VARCHAR(191) NULL,
    `cITLDirectorEndorsementId` VARCHAR(191) NULL,

    INDEX `IMEvent_iMId_idx`(`iMId`),
    INDEX `IMEvent_fileId_idx`(`fileId`),
    INDEX `IMEvent_submittedPeerReviewId_idx`(`submittedPeerReviewId`),
    INDEX `IMEvent_submittedPeerSuggestionId_idx`(`submittedPeerSuggestionId`),
    INDEX `IMEvent_submittedCoordinatorReviewId_idx`(`submittedCoordinatorReviewId`),
    INDEX `IMEvent_submittedCoordinatorSuggestionId_idx`(`submittedCoordinatorSuggestionId`),
    INDEX `IMEvent_submittedChairpersonReviewId_idx`(`submittedChairpersonReviewId`),
    INDEX `IMEvent_coordinatorEndorsementId_idx`(`coordinatorEndorsementId`),
    INDEX `IMEvent_deanEndorsementId_idx`(`deanEndorsementId`),
    INDEX `IMEvent_iMDCoordinatorEndorsementId_idx`(`iMDCoordinatorEndorsementId`),
    INDEX `IMEvent_submittedIMDCoordinatorSuggestionId_idx`(`submittedIMDCoordinatorSuggestionId`),
    INDEX `IMEvent_cITLDirectorEndorsementId_idx`(`cITLDirectorEndorsementId`),
    INDEX `IMEvent_submittedChairpersonSuggestionId_idx`(`submittedChairpersonSuggestionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
