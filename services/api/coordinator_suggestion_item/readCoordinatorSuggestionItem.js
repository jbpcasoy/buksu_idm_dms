import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestionItem =
    await prisma.coordinatorSuggestionItem.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return coordinatorSuggestionItem;
}
