import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFile from "../file/readFile";

export default async function updateActiveFile(id, { fileId }) {
  const prisma = PRISMA_CLIENT;
  try {
    const file = await readFile(fileId);

    const activeFile = await prisma.activeFile.update({
      where: {
        id,
      },
      data: {
        File: {
          connect: {
            id: file.id,
          },
        },
      },
    });
    return activeFile;
  } catch (error) {
    throw error;
  }
}
