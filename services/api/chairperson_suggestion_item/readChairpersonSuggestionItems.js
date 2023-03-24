import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonSuggestionItems({
  limit,
  page,
  chairpersonSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonSuggestionItems =
      await prisma.chairpersonSuggestionItem.findMany({
        take: limit,
        skip: page ? (page - 1) * limit : undefined,
        where: {
          chairpersonSuggestionId: {
            contains: chairpersonSuggestionId,
          },
        },
      });

    const total = await prisma.chairpersonSuggestionItem.count({
      where: {
        chairpersonSuggestionId: {
          contains: chairpersonSuggestionId,
        },
      },
    });
    return { data: chairpersonSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
