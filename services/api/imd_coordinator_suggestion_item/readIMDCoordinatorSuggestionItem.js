import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIMDCoordinatorSuggestionItem({
  id,
  filter = {},
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IMDCoordinatorSuggestionItem;

  const iMDCoordinatorSuggestionItem =
    await prisma.iMDCoordinatorSuggestionItem.findFirstOrThrow({
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
        IMDCoordinatorSuggestion: {
          include: {
            IM: true,
          },
        },
      },
    });
  return iMDCoordinatorSuggestionItem;
}
