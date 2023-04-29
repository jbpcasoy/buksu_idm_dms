import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readFile from "./readFile";

export default async function updateFile({ id, data = { fileName }, ability }) {
  const prisma = PRISMA_CLIENT;

  const file = await readFile({ id, ability });

  const updatedFile = await prisma.file.update({
    where: {
      id,
    },
    data: {
      fileName: data.fileName,
    },
  });

  return updatedFile;
}
