import { PrismaClient } from "@prisma/client";
import readFile from "../file/readFile";

export default async function createActiveFile({ fileId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const iM = await findIM({ fileId, iMId });
    const activeFile = await prisma.activeFile.create({
      data: { fileId, iMId: iM.id },
    });

    return activeFile;
  } catch (error) {
    throw error;
  }
}

async function findIM({ fileId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const file = await readFile(fileId);
    const iM = await prisma.iM.findFirstOrThrow({
      where: {
        File: {
          some: {
            id: file.id,
          },
        },
        id: iMId,
      },
    });

    return iM;
  } catch (error) {
    throw error;
  }
}
