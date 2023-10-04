import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteQamisSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestionItem = await prisma.qamisSuggestionItem.delete({
    where: {
      id,
    },
  });
  return qamisSuggestionItem;
}
