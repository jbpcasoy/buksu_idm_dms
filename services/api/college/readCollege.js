import { PrismaClient } from "@prisma/client";

export default async function readCollege(id) {
  const prisma = new PrismaClient();

  try {
    const college = await prisma.college.findUnique({
      where: {
        id,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
