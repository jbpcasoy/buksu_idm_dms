import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerSuggestion({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerSuggestion;

  const peerSuggestion = await prisma.peerSuggestion.findFirstOrThrow({
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
      SubmittedPeerReview: true,
    },
  });
  return peerSuggestion;
}
