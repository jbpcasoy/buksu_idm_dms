import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveFiles({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeFiles = await prisma.activeFile.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return activeFiles;
  } catch (error) {
    throw error;
  }
}
