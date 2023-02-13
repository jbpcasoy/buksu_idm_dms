import { PrismaClient } from "@prisma/client";

export default async function readFile(id) {
  const prisma = new PrismaClient();

  try {
    const file = await prisma.file.findUnique({
      where: {
        id,
      },
      include: {
        iM: true,
      },
    });

    return file;
  } catch (error) {
    throw error;
  }
}
