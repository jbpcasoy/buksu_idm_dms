import { PrismaClient } from "@prisma/client";

export default async function readActiveFile(id) {
  const prisma = new PrismaClient();

  try {
    const activeFile = await prisma.activeFile.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return activeFile;
  } catch (error) {
    throw error;
  }
}
