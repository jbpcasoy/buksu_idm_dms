import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveFiles({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;

  const accessibility = accessibleBy(ability).ActiveFile;

  try {
    const activeFiles = await prisma.activeFile.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: { AND: [accessibility] },
    });

    const total = await prisma.activeFile.count({
      where: {
        AND: [accessibility],
      },
    });

    return { data: activeFiles, total };
  } catch (error) {
    throw error;
  }
}
