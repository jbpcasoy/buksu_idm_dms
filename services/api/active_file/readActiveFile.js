import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveFile(id) {
  const prisma = PRISMA_CLIENT;

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
