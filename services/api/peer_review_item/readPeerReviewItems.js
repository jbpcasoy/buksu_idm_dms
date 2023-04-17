import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerReviewItems({
  limit,
  page,
  questionId,
  peerReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const peerReviewItems = await prisma.peerReviewItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      questionId: {
        contains: questionId,
      },
      peerReviewId: {
        contains: peerReviewId,
      },
    },
  });
  const total = await prisma.peerReviewItem.count({
    where: {
      questionId: {
        contains: questionId,
      },
      peerReviewId: {
        contains: peerReviewId,
      },
    },
  });

  return { data: peerReviewItems, total };
}
