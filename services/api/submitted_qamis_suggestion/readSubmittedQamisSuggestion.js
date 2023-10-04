import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedQamisSuggestion({
  id,
  ability,
  filter,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedQamisSuggestion;

  const submittedQamisSuggestion =
    await prisma.submittedQamisSuggestion.findFirstOrThrow({
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

  return submittedQamisSuggestion;
}
