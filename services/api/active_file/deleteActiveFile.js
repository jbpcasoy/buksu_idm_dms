import { PrismaClient } from "@prisma/client";

export default async function deleteActiveFile(id) {
  const prisma = new PrismaClient();

  try {
    const activeFile = await prisma.activeFile.delete({
      where: {
        id,
      },
    });

    return activeFile;
  } catch (error) {
    throw error;
  }
}
