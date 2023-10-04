import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateQamisSuggestionItem(
  id,
  { value, pageNumber, actionTaken, actionPageNumber, number }
) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestionItem = await prisma.qamisSuggestionItem.update({
    where: {
      id,
    },
    data: { value, pageNumber, actionTaken, actionPageNumber, number },
  });

  return qamisSuggestionItem;
}
