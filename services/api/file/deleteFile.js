import { PrismaClient } from "@prisma/client";

export default async function deleteFile(id) {
  const prisma = new PrismaClient();

  try {
    const deletedFile = await prisma.file.delete({
      where: {
        id,
      },
    });

    return deletedFile;
  } catch (error) {
    throw error;
  }
}
