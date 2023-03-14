import { PrismaClient } from "@prisma/client";

export default async function deleteCoordinatorSuggestionItem(id) {
  const prisma = new PrismaClient();

  try {
    const coordinatorSuggestionItem =
      await prisma.coordinatorSuggestionItem.delete({
        where: {
          id,
        },
      });
    return coordinatorSuggestionItem;
  } catch (error) {
    throw error;
  }
}
