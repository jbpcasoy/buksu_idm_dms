import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorSuggestionItem({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorSuggestionItem;

  const coordinatorSuggestionItem =
    await prisma.coordinatorSuggestionItem.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
      include: {
        CoordinatorSuggestion: {
          include: {
            SubmittedCoordinatorReview: {
              include: {
                CoordinatorReview: true,
              },
            },
          },
        },
      },
    });
  return coordinatorSuggestionItem;
}
