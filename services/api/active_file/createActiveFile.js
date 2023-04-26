import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readIM from "../im/readIM";
import readFile from "../file/readFile";

export default async function createActiveFile({ fileId, iMId, ability }) {
  const prisma = PRISMA_CLIENT;

  // const file = await findFile({ fileId, iMId });
  const file = readFile({
    id: fileId,
    ability,
    filter: {
      iM: {
        id: iM.id,
      },
    },
  });
  const activeFile = await prisma.activeFile.create({
    data: { fileId: file.id, iMId },
  });

  return activeFile;
}
