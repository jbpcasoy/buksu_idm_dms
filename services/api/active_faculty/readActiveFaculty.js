import { PrismaClient } from "@prisma/client";

export default async function readActiveFaculty(id) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
