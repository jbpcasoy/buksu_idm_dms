import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedPeerSuggestion({
  id,
  ability,
  filter,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedPeerSuggestion;

  const submittedPeerSuggestion =
    await prisma.submittedPeerSuggestion.findFirstOrThrow({
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

  return submittedPeerSuggestion;
}
