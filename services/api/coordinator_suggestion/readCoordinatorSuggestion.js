import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorSuggestion({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorSuggestion;

  const coordinatorSuggestion =
    await prisma.coordinatorSuggestion.findFirstOrThrow({
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
        SubmittedCoordinatorReview: true,
      },
    });
  return coordinatorSuggestion;
}
