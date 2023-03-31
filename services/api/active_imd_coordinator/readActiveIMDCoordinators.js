import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveIMDCoordinators({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeIMDCoordinators = await prisma.activeIMDCoordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.activeIMDCoordinator.count();

    return { data: activeIMDCoordinators, total };
  } catch (error) {
    throw error;
  }
}
