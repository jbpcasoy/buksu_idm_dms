import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFile from "../file/readFile";

export default async function createActiveFile({ fileId, iMId, ability }) {
  const prisma = PRISMA_CLIENT;

  // const file = await findFile({ fileId, iMId });
  const file = await readFile({
    id: fileId,
    ability,
    filter: {
      iM: {
        id: iMId,
      },
    },
  });
  const activeFile = await prisma.activeFile.create({
    data: {
      File: { connect: { id: file.id } },
      IM: {
        connect: { id: file.iMId },
      },
    },
  });

  return activeFile;
}
