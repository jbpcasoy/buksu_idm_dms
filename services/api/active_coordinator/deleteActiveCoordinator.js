import { PrismaClient } from "@prisma/client";

export default async function deleteActiveCoordinator(id) {
  const prisma = new PrismaClient();

  try {
    const activeCoordinator = await prisma.activeCoordinator.delete({
      where: {
        id,
      },
    });

    return activeCoordinator;
  } catch (error) {
    throw error;
  }
}
