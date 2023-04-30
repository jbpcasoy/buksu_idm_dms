import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerReview({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerReview;

  const peerReview = await prisma.peerReview.findFirstOrThrow({
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
      IM: {
        include: {
          SubmittedPeerSuggestion: true,
        },
      },
      Faculty: {
        include: {
          user: true,
        },
      },
      PeerReviewItem: true,
    },
  });
  return peerReview;
}
