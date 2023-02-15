import { PrismaClient } from "@prisma/client";

export default async function createActiveFaculty({ userId, facultyId }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.create({
      data: {
        facultyId,
        userId,
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
