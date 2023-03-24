import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteFile(id) {
  const prisma = PRISMA_CLIENT;

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
