import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readIM from "../im/readIM";

export default async function createActiveFile({ fileId, iMId }) {
  const prisma = PRISMA_CLIENT;

  const file = await findFile({ fileId, iMId });
  const activeFile = await prisma.activeFile.create({
    data: { fileId: file.id, iMId },
  });

  return activeFile;
}

async function findFile({ fileId, iMId }) {
  const prisma = PRISMA_CLIENT;

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
}
