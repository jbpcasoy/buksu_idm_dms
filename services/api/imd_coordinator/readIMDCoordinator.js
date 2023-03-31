import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinator({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinators = await prisma.iMDCoordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.iMDCoordinator.count();

    return { data: iMDCoordinators, total };
  } catch (error) {
    throw error;
  }
}
