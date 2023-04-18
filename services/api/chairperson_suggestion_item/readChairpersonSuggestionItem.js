import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonSuggestionItem({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonSuggestionItem;

  const chairpersonSuggestionItem =
    await prisma.chairpersonSuggestionItem.findFirstOrThrow({
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
        ChairpersonSuggestion: {
          include: {
            SubmittedChairpersonReview: {
              include: {
                ChairpersonReview: true,
              },
            },
          },
        },
      },
    });

  return chairpersonSuggestionItem;
}
