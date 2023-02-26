-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,
    CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" DATETIME NOT NULL,
    CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" DATETIME,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "IM" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serialNumber" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'SUBMITTED',
    "ownerId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "IM_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "File" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "fileName" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "iMId" TEXT NOT NULL,
    "googleDocsUrl" TEXT,
    CONSTRAINT "File_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActiveFile" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAT" DATETIME NOT NULL,
    "fileId" TEXT NOT NULL,
    "iMId" TEXT NOT NULL,
    CONSTRAINT "ActiveFile_fileId_fkey" FOREIGN KEY ("fileId") REFERENCES "File" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveFile_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "College" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "Department" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "collegeId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Department_collegeId_fkey" FOREIGN KEY ("collegeId") REFERENCES "College" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Faculty" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "Faculty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Faculty_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActiveFaculty" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "facultyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    CONSTRAINT "ActiveFaculty_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveFaculty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveFaculty_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Chairperson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "facultyId" TEXT NOT NULL,
    CONSTRAINT "Chairperson_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Coordinator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "facultyId" TEXT NOT NULL,
    CONSTRAINT "Coordinator_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Senior" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "facultyId" TEXT NOT NULL,
    CONSTRAINT "Senior_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActiveCoordinator" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "coordinatorId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    CONSTRAINT "ActiveCoordinator_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "Coordinator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveCoordinator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActiveSenior" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "seniorId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    CONSTRAINT "ActiveSenior_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Senior" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveSenior_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ActiveChairperson" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "chairpersonId" TEXT NOT NULL,
    "departmentId" TEXT NOT NULL,
    CONSTRAINT "ActiveChairperson_chairpersonId_fkey" FOREIGN KEY ("chairpersonId") REFERENCES "Chairperson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ActiveChairperson_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "DepartmentApproval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "iMId" TEXT NOT NULL,
    CONSTRAINT "DepartmentApproval_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "CoordinatorApproval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,
    "coordinatorId" TEXT NOT NULL,
    CONSTRAINT "CoordinatorApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "CoordinatorApproval_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "Coordinator" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChairpersonApproval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,
    "chairpersonId" TEXT NOT NULL,
    CONSTRAINT "ChairpersonApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "ChairpersonApproval_chairpersonId_fkey" FOREIGN KEY ("chairpersonId") REFERENCES "Chairperson" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "SeniorApproval" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "cretaedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "seniorId" TEXT NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,
    CONSTRAINT "SeniorApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "SeniorApproval_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Senior" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Attachment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "fileName" TEXT NOT NULL,
    "originalFileName" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "File_fileName_key" ON "File"("fileName");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFile_fileId_key" ON "ActiveFile"("fileId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFile_iMId_key" ON "ActiveFile"("iMId");

-- CreateIndex
CREATE UNIQUE INDEX "College_name_key" ON "College"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Department_name_key" ON "Department"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Faculty_userId_departmentId_key" ON "Faculty"("userId", "departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFaculty_facultyId_key" ON "ActiveFaculty"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFaculty_userId_key" ON "ActiveFaculty"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "Chairperson_facultyId_key" ON "Chairperson"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "Coordinator_facultyId_key" ON "Coordinator"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "Senior_facultyId_key" ON "Senior"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveCoordinator_coordinatorId_key" ON "ActiveCoordinator"("coordinatorId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveCoordinator_departmentId_key" ON "ActiveCoordinator"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveSenior_seniorId_key" ON "ActiveSenior"("seniorId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChairperson_chairpersonId_key" ON "ActiveChairperson"("chairpersonId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChairperson_departmentId_key" ON "ActiveChairperson"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentApproval_iMId_key" ON "DepartmentApproval"("iMId");

-- CreateIndex
CREATE UNIQUE INDEX "CoordinatorApproval_departmentApprovalId_key" ON "CoordinatorApproval"("departmentApprovalId");

-- CreateIndex
CREATE UNIQUE INDEX "ChairpersonApproval_departmentApprovalId_key" ON "ChairpersonApproval"("departmentApprovalId");

-- CreateIndex
CREATE UNIQUE INDEX "SeniorApproval_departmentApprovalId_key" ON "SeniorApproval"("departmentApprovalId");

-- CreateIndex
CREATE UNIQUE INDEX "Attachment_fileName_key" ON "Attachment"("fileName");
