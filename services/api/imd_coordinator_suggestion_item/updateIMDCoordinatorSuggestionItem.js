import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateIMDCoordinatorSuggestionItem(
  id,
  { value, pageNumber, actionTaken, remarks }
) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestionItem =
      await prisma.iMDCoordinatorSuggestionItem.update({
        where: {
          id,
        },
        data: {
          value,
          pageNumber,
          actionTaken,
          remarks,
        },
      });

    return iMDCoordinatorSuggestionItem;
  } catch (error) {
    throw error;
  }
}
