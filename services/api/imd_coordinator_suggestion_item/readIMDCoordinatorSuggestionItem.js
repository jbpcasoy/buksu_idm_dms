import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorSuggestionItem(
  id,
  filter = {}
) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestionItem =
    await prisma.iMDCoordinatorSuggestionItem.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });
  return iMDCoordinatorSuggestionItem;
}
