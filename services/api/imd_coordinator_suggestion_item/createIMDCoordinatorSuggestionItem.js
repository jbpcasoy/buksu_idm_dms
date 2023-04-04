import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createIMDCoordinatorSuggestionItem({
  iMDCoordinatorSuggestionId,
  value,
  pageNumber,
  actionTaken,
  remarks,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestionItem =
      await prisma.iMDCoordinatorSuggestionItem.create({
        data: {
          iMDCoordinatorSuggestionId,
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
