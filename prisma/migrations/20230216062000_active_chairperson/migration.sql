-- CreateTable
CREATE TABLE "ActiveChairperson" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" TEXT NOT NULL,
    "chairpersonId" TEXT NOT NULL,

    CONSTRAINT "ActiveChairperson_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChairperson_departmentId_key" ON "ActiveChairperson"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveChairperson_chairpersonId_key" ON "ActiveChairperson"("chairpersonId");

-- AddForeignKey
ALTER TABLE "ActiveChairperson" ADD CONSTRAINT "ActiveChairperson_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveChairperson" ADD CONSTRAINT "ActiveChairperson_chairpersonId_fkey" FOREIGN KEY ("chairpersonId") REFERENCES "Chairperson"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
