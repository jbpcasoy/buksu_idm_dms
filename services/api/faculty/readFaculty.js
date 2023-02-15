import { PrismaClient } from "@prisma/client";

export default async function readFaculty(id) {
  const prisma = new PrismaClient();

  try {
    const faculty = await prisma.faculty.findUnique({
      where: {
        id,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
