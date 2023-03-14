import { PrismaClient } from "@prisma/client";

export default async function readChairpersonSuggestionItem(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonSuggestionItem =
      await prisma.chairpersonSuggestionItem.findUniqueOrThrow({
        where: {
          id,
        },
      });

    return chairpersonSuggestionItem;
  } catch (error) {
    throw error;
  }
}
