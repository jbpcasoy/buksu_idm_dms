import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveCoordinator(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeCoordinator = prisma.activeCoordinator.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return activeCoordinator;
  } catch (error) {
    throw error;
  }
}
