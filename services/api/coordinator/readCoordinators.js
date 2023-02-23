import { PrismaClient } from "@prisma/client";

export default async function readCoordinators({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const coordinators = await prisma.coordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.coordinator.count();

    return { data: coordinators };
  } catch (error) {
    throw error;
  }
}
