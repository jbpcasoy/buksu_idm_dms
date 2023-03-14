import { PrismaClient } from "@prisma/client";

export default async function updateCoordinatorSuggestionItem(
  id,
  { actionTaken, remarks, pageNumber, value }
) {
  const prisma = new PrismaClient();

  try {
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
  } catch (error) {
    throw error;
  }
}
