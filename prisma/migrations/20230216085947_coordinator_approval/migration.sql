-- CreateTable
CREATE TABLE "CoordinatorApproval" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentApprovalId" TEXT NOT NULL,
    "coordinatorId" TEXT NOT NULL,

    CONSTRAINT "CoordinatorApproval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CoordinatorApproval_departmentApprovalId_key" ON "CoordinatorApproval"("departmentApprovalId");

-- AddForeignKey
ALTER TABLE "CoordinatorApproval" ADD CONSTRAINT "CoordinatorApproval_departmentApprovalId_fkey" FOREIGN KEY ("departmentApprovalId") REFERENCES "DepartmentApproval"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CoordinatorApproval" ADD CONSTRAINT "CoordinatorApproval_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "Coordinator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
