-- CreateTable
CREATE TABLE "ChairpersonApproval" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,
    "chairpersonId" TEXT NOT NULL,

    CONSTRAINT "ChairpersonApproval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ChairpersonApproval_departmentApprovalId_key" ON "ChairpersonApproval"("departmentApprovalId");

-- AddForeignKey
ALTER TABLE "ChairpersonApproval" ADD CONSTRAINT "ChairpersonApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChairpersonApproval" ADD CONSTRAINT "ChairpersonApproval_chairpersonId_fkey" FOREIGN KEY ("chairpersonId") REFERENCES "Chairperson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
