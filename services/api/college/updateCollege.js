import { PrismaClient } from "@prisma/client";

export default async function updateCollege(id, { name }) {
  const prisma = new PrismaClient();

  try {
    const college = await prisma.college.update({
      where: {
        id,
      },
      data: {
        name,
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
