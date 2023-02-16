import { PrismaClient } from "@prisma/client";

export default async function readSenior(id) {
  const prisma = new PrismaClient();

  try {
    const senior = await prisma.senior.findUnique({
      where: {
        id,
      },
    });

    return senior;
  } catch (error) {
    throw error;
  }
}
