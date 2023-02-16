-- CreateTable
CREATE TABLE "ActiveSenior" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" TEXT NOT NULL,
    "seniorId" TEXT NOT NULL,

    CONSTRAINT "ActiveSenior_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveSenior_seniorId_key" ON "ActiveSenior"("seniorId");

-- AddForeignKey
ALTER TABLE "ActiveSenior" ADD CONSTRAINT "ActiveSenior_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveSenior" ADD CONSTRAINT "ActiveSenior_seniorId_fkey" FOREIGN KEY ("seniorId") REFERENCES "Senior"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
