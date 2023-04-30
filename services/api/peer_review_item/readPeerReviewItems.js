import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerReviewItems({
  limit,
  page,
  questionId,
  peerReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerReviewItem;

  const peerReviewItems = await prisma.peerReviewItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          questionId: {
            contains: questionId,
          },
          peerReviewId: {
            contains: peerReviewId,
          },
        },
      ],
    },
  });
  const total = await prisma.peerReviewItem.count({
    where: {
      AND: [
        accessibility,
        {
          questionId: {
            contains: questionId,
          },
          peerReviewId: {
            contains: peerReviewId,
          },
        },
      ],
    },
  });

  return { data: peerReviewItems, total };
}
