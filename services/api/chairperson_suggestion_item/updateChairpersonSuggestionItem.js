import { PrismaClient } from "@prisma/client";

export default async function updateChairpersonSuggestionItem(
  id,
  { value, pageNumber, actionTaken, remarks }
) {
  const prisma = new PrismaClient();

  try {
    const chairpersonSuggestionItem =
      await prisma.chairpersonSuggestionItem.update({
        where: {
          id,
        },
        data: { actionTaken, pageNumber, remarks, value },
      });

    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
