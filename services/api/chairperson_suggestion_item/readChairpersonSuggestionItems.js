import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonSuggestionItems({
  limit,
  page,
  chairpersonSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonSuggestionItem;

  const chairpersonSuggestionItems =
    await prisma.chairpersonSuggestionItem.findMany({
      take: limit,
      skip: limit && page ? (page - 1) * limit : undefined,
      where: {
        AND: [
          accessibility,
          {
            chairpersonSuggestionId: {
              contains: chairpersonSuggestionId,
            },
          },
        ],
      },
    });

  const total = await prisma.chairpersonSuggestionItem.count({
    where: {
      AND: [
        accessibility,
        {
          chairpersonSuggestionId: {
            contains: chairpersonSuggestionId,
          },
        },
      ],
    },
  });
  return { data: chairpersonSuggestionItems, total };
}
