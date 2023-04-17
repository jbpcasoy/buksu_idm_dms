import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateCoordinatorSuggestionItem(
  id,
  { actionTaken, remarks, pageNumber, value }
) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestionItem =
    await prisma.coordinatorSuggestionItem.update({
      where: {
        id,
      },
      data: {
        actionTaken,
        pageNumber,
        remarks,
        value,
      },
    });
  return coordinatorSuggestionItem;
}
