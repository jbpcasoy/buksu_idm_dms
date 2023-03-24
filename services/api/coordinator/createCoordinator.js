import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinator({ facultyId }) {
  const prisma = PRISMA_CLIENT;

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
