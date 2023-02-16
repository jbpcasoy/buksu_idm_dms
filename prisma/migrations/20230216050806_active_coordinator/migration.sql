-- CreateTable
CREATE TABLE "ActiveCoordinator" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "departmentId" TEXT NOT NULL,
    "coordinatorId" TEXT NOT NULL,

    CONSTRAINT "ActiveCoordinator_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveCoordinator_departmentId_key" ON "ActiveCoordinator"("departmentId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveCoordinator_coordinatorId_key" ON "ActiveCoordinator"("coordinatorId");

-- AddForeignKey
ALTER TABLE "ActiveCoordinator" ADD CONSTRAINT "ActiveCoordinator_departmentId_fkey" FOREIGN KEY ("departmentId") REFERENCES "Department"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveCoordinator" ADD CONSTRAINT "ActiveCoordinator_coordinatorId_fkey" FOREIGN KEY ("coordinatorId") REFERENCES "Coordinator"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
