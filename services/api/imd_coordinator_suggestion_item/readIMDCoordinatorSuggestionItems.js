import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIMDCoordinatorSuggestionItems({
  limit,
  page,
  iMDCoordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IMDCoordinatorSuggestionItem;

  const iMDCoordinatorSuggestionItems =
    await prisma.iMDCoordinatorSuggestionItem.findMany({
      take: limit,
      skip: page && limit ? (page - 1) * limit : undefined,
      where: {
        AND: [
          accessibility,
          {
            iMDCoordinatorSuggestionId,
          },
        ],
      },
    });
  const total = await prisma.iMDCoordinatorSuggestionItem.count({
    where: {
      AND: [
        accessibility,
        {
          iMDCoordinatorSuggestionId,
        },
      ],
    },
  });

  return { data: iMDCoordinatorSuggestionItems, total };
}
