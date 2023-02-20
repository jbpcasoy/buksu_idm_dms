import { PrismaClient } from "@prisma/client";

export default async function deleteActiveFaculty(id) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.delete({
      where: {
        id,
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
