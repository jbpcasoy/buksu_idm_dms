import { PrismaClient } from "@prisma/client";

export default async function deleteFaculty(id) {
  const prisma = new PrismaClient();

  try {
    const faculty = await prisma.faculty.delete({
      where: {
        id,
      },
    });

    return faculty;
  } catch (error) {
    throw error;
  }
}
