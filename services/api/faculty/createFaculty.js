import { PrismaClient } from "@prisma/client";

export default async function createFaculty({ userId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const faculty = await prisma.faculty.create({
      data: {
        userId,
        departmentId,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
