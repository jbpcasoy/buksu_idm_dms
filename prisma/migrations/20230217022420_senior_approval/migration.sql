-- CreateTable
CREATE TABLE "SeniorApproval" (
    "id" TEXT NOT NULL,
    "cretaedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "seniorId" TEXT NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,

    CONSTRAINT "SeniorApproval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "SeniorApproval_departmentApprovalId_key" ON "SeniorApproval"("departmentApprovalId");

-- AddForeignKey
ALTER TABLE "SeniorApproval" ADD CONSTRAINT "SeniorApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SeniorApproval" ADD CONSTRAINT "SeniorApproval_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Senior"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
