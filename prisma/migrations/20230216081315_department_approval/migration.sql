-- CreateTable
CREATE TABLE "DepartmentApproval" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "iMId" TEXT NOT NULL,

    CONSTRAINT "DepartmentApproval_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "DepartmentApproval_iMId_key" ON "DepartmentApproval"("iMId");

-- AddForeignKey
ALTER TABLE "DepartmentApproval" ADD CONSTRAINT "DepartmentApproval_iMId_fkey" FOREIGN KEY ("iMId") REFERENCES "IM"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
