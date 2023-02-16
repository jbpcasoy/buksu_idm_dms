import { PrismaClient } from "@prisma/client";

export default async function deleteCoordinator(id) {
  const prisma = new PrismaClient();

  try {
    const coordinator = prisma.coordinator.delete({
      where: {
        id,
      },
    });
    return coordinator;
  } catch (error) {
    throw error;
  }
}
