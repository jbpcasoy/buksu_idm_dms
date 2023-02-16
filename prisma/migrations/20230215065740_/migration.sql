-- CreateTable
CREATE TABLE "ActiveFaculty" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "facultyId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "ActiveFaculty_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFaculty_facultyId_key" ON "ActiveFaculty"("facultyId");

-- CreateIndex
CREATE UNIQUE INDEX "ActiveFaculty_userId_key" ON "ActiveFaculty"("userId");

-- AddForeignKey
ALTER TABLE "ActiveFaculty" ADD CONSTRAINT "ActiveFaculty_facultyId_fkey" FOREIGN KEY ("facultyId") REFERENCES "Faculty"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ActiveFaculty" ADD CONSTRAINT "ActiveFaculty_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
