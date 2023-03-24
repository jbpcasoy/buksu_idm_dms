import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveCoordinators({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeCoordinators = await prisma.activeCoordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    return activeCoordinators;
  } catch (error) {
    throw error;
  }
}
