import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createQamisSuggestionItem({
  qamisSuggestionId,
  value,
  pageNumber,
  actionTaken,
  actionPageNumber,
  number,
}) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestionItem = await prisma.qamisSuggestionItem.create({
    data: {
      pageNumber,
      value,
      QamisSuggestion: {
        connect: {
          id: qamisSuggestionId,
        },
      },
      actionTaken,
      actionPageNumber,
      number,
    },
  });
  return qamisSuggestionItem;
}
