import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerReviewItem({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerReviewItem;

  const peerReviewItem = await prisma.peerReviewItem.findFirstOrThrow({
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
      PeerReview: true,
    },
  });

  return peerReviewItem;
}
