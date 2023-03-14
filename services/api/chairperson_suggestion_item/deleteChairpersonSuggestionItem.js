import { PrismaClient } from "@prisma/client";

export default async function deleteChairpersonSuggestionItem(id) {
  const prisma = new PrismaClient();
  try {
    const chairpersonSuggestionItem =
      await prisma.chairpersonSuggestionItem.delete({
        where: {
          id,
        },
      });
    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
