import { PrismaClient } from "@prisma/client";

export default async function readActiveFiles({ limit, page }) {
  const prisma = new PrismaClient();

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
