import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedIMDCoordinatorSuggestion({
  id,
  filter = {},
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedIMDCoordinatorSuggestion;

  const submittedIMDCoordinatorSuggestion =
    await prisma.submittedIMDCoordinatorSuggestion.findFirstOrThrow({
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
        IMDCoordinatorSuggestion: true,
      },
    });

  return submittedIMDCoordinatorSuggestion;
}
