import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinator(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinator = prisma.coordinator.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return coordinator;
  } catch (error) {
    throw error;
  }
}
