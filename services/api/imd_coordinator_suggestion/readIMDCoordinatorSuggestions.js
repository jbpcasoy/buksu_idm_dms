import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorSuggestions({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestions =
      await prisma.iMDCoordinatorSuggestion.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
    const total = await prisma.iMDCoordinatorSuggestion.count();

    return { data: iMDCoordinatorSuggestions, total };
  } catch (error) {
    throw error;
  }
}
