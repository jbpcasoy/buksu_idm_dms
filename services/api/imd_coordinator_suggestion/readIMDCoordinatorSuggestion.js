import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIMDCoordinatorSuggestion({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IMDCoordinatorSuggestion;

  const iMDCoordinatorSuggestion =
    await prisma.iMDCoordinatorSuggestion.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
    });

  return iMDCoordinatorSuggestion;
}
