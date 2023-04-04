import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createIMDCoordinatorSuggestion({
  iMDCoordinatorId,
  iMId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestion =
      await prisma.iMDCoordinatorSuggestion.create({
        data: {
          IMDCoordinator: {
            connect: {
              id: iMDCoordinatorId,
            },
          },
          IM: {
            connect: {
              id: iMId,
            },
          },
        },
      });

    return iMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
