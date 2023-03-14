import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorSuggestionItem(id) {
  const prisma = new PrismaClient();

  try {
    const coordinatorSuggestionItem =
      await prisma.coordinatorSuggestionItem.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return coordinatorSuggestionItem;
  } catch (error) {
    throw error;
  }
}
