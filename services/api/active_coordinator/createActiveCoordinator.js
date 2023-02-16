import { PrismaClient } from "@prisma/client";

export default async function createActiveCoordinator({ coordinatorId }) {
  const prisma = new PrismaClient();

  try {
    const activeCoordinator = await prisma.activeCoordinator.create({
      data: {
        coordinatorId,
      },
    });
    return activeCoordinator;
  } catch (error) {
    throw error;
  }
}
