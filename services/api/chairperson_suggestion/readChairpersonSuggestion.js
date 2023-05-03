import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonSuggestion({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonSuggestion;

  const chairpersonSuggestion =
    await prisma.chairpersonSuggestion.findFirstOrThrow({
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
        SubmittedChairpersonReview: {
          include: {
            ChairpersonReview: {
              include: {
                IM: {
                  include: {
                    SubmittedChairpersonSuggestion: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  return chairpersonSuggestion;
}
