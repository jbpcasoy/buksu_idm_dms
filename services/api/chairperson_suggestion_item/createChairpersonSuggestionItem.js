import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonSuggestionItem({
  chairpersonSuggestionId,
  value,
  remarks,
  pageNumber,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonSuggestionItem =
      await prisma.chairpersonSuggestionItem.create({
        data: {
          ChairpersonSuggestion: {
            connect: {
              id: chairpersonSuggestionId,
            },
          },
          pageNumber,
          value,
          remarks,
        },
      });

    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
