import { PrismaClient } from "@prisma/client";

export default async function readChairpersonSuggestionItems({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonSuggestionItems =
      await prisma.chairpersonSuggestionItem.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });

    const total = await prisma.chairpersonSuggestionItem.count();
    return { data: chairpersonSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
