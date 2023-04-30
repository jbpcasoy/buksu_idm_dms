import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteIMDCoordinatorSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestionItem =
    await prisma.iMDCoordinatorSuggestionItem.delete({
      where: {
        id,
      },
    });

  return iMDCoordinatorSuggestionItem;
}
