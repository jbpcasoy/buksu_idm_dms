import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateFile(id, { googleDocsUrl }) {
  const prisma = PRISMA_CLIENT;

  const updatedFile = prisma.file.update({
    where: {
      id,
    },
    data: {
      googleDocsUrl,
    },
  });

  return updatedFile;
}
