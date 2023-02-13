import { PrismaClient } from "@prisma/client";

export default async function updateFile(id, { googleDocsUrl }) {
  const prisma = new PrismaClient();

  try {
    const updatedFile = prisma.file.update({
      where: {
        id,
      },
      data: {
        googleDocsUrl,
      },
    });

    return updatedFile;
  } catch (error) {
    throw error;
  }
}
