import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorSuggestionItems({
  limit,
  page,
  coordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorSuggestionItem;

  const coordinatorSuggestionItems =
    await prisma.coordinatorSuggestionItem.findMany({
      take: limit,
      skip: limit && page ? (page - 1) * limit : undefined,
      where: {
        AND: [
          accessibility,
          {
            coordinatorSuggestionId: {
              contains: coordinatorSuggestionId,
            },
          },
        ],
      },
    });
  const total = await prisma.coordinatorSuggestionItem.count({
    where: {
      AND: [
        accessibility,
        {
          coordinatorSuggestionId: {
            contains: coordinatorSuggestionId,
          },
        },
      ],
    },
  });
  return { data: coordinatorSuggestionItems, total };
}
