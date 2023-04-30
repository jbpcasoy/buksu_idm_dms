import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinatorSuggestionItem({
  coordinatorSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  const prisma = PRISMA_CLIENT;

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
}
