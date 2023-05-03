import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveIMDCoordinator({ iMDCoordinatorId }) {
  const prisma = PRISMA_CLIENT;

  const activeIMDCoordinator = await prisma.activeIMDCoordinator.create({
    data: {
      IMDCoordinator: {
        connect: {
          id: iMDCoordinatorId,
        },
      },
      uuid: process.env.UUID,
    },
  });
  return activeIMDCoordinator;
}
