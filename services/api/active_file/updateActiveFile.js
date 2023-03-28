import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFile from "../file/readFile";
import readIM from "../im/readIM";

export default async function updateActiveFile(id, { iMId, fileId }) {
  const prisma = PRISMA_CLIENT;
  try {
    const iM = await readIM(iMId);
    const file = await readFile(fileId);

    const activeFile = await prisma.activeFile.update({
      where: {
        id,
      },
      data: {
        IM: {
          connect: {
            id: iM.id,
          },
        },
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
