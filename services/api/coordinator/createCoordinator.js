import { PrismaClient } from "@prisma/client";

export default async function createCoordinator({ facultyId }) {
  const prisma = new PrismaClient();

  try {
    const coordinator = await prisma.coordinator.create({
      data: {
        facultyId,
      },
    });

    return coordinator;
  } catch (error) {
    throw error;
  }
}
