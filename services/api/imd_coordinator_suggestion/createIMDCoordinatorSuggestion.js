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
          iMDCoordinatorId,
          iMId,
        },
      });

    return iMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
