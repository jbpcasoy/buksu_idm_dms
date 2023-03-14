import { PrismaClient } from "@prisma/client";

export default async function createChairpersonSuggestionItem({
  chairpersonSuggestionId,
  value,
  remarks,
  pageNumber,
}) {
  const prisma = new PrismaClient();

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
