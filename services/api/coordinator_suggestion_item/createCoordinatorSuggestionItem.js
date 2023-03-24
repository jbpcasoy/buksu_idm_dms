import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinatorSuggestionItem({
  coordinatorSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorSuggestionItem =
      await prisma.coordinatorSuggestionItem.create({
        data: {
          pageNumber,
          value,
          CoordinatorSuggestion: {
            connect: {
              id: coordinatorSuggestionId,
            },
          },
          remarks,
        },
      });
    return coordinatorSuggestionItem;
  } catch (error) {
    throw error;
  }
}
