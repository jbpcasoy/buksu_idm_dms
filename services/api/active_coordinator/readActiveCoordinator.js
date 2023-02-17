import { PrismaClient } from "@prisma/client";

export default async function readActiveCoordinator(id) {
  const prisma = new PrismaClient();

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
