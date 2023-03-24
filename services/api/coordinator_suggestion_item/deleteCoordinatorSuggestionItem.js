import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCoordinatorSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

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
