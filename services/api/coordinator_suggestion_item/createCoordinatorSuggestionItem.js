import { PrismaClient } from "@prisma/client";

export default async function createCoordinatorSuggestionItem({
  coordinatorSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  const prisma = new PrismaClient();

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
