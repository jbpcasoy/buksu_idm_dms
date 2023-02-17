import { PrismaClient } from "@prisma/client";
import readIM from "../im/readIM";

export default async function createActiveFile({ fileId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const file = await findFile({ fileId, iMId });
    const activeFile = await prisma.activeFile.create({
      data: { fileId: file.id, iMId },
    });

    return activeFile;
  } catch (error) {
    throw error;
  }
}

async function findFile({ fileId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const iM = await readIM(iMId);
    const file = await prisma.file.findFirstOrThrow({
      where: {
        iM: {
          id: iM.id,
        },
        id: fileId,
      },
    });

    return file;
  } catch (error) {
    throw error;
  }
}
