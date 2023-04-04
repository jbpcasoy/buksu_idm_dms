import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorSuggestionItems({
  limit,
  page,
  iMDCoordinatorSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestionItems =
      await prisma.iMDCoordinatorSuggestionItem.findMany({
        take: limit,
        skip: page && limit ? (page - 1) * limit : undefined,
        where: {
          iMDCoordinatorSuggestionId,
        },
      });
    const total = await prisma.iMDCoordinatorSuggestionItem.count();

    return { data: iMDCoordinatorSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
