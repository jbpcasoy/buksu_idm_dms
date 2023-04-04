import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveIMDCoordinator({ iMDCoordinatorId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeIMDCoordinator = await prisma.activeIMDCoordinator.create({
      data: {
        IMDCoordinator: {
          connect: {
            id: iMDCoordinatorId,
          },
        },
      },
    });
    return activeIMDCoordinator;
  } catch (error) {
    throw error;
  }
}
