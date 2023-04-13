import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveCoordinators({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveCoordinator;

  try {
    const activeCoordinators = await prisma.activeCoordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });
    const total = await prisma.activeCoordinator.count({
      where: {
        AND: [accessibility],
      },
    });
    return { data: activeCoordinators, total };
  } catch (error) {
    throw error;
  }
}
