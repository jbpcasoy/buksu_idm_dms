import { PrismaClient } from "@prisma/client";

export default async function readActiveCoordinators({ limit, page }) {
  const prisma = new PrismaClient();

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
