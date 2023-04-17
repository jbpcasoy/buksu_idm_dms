import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createPeerReviewItem({
  questionId,
  answer,
  peerReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const peerReviewItem = await prisma.peerReviewItem.create({
    data: {
      questionId,
      answer,
      PeerReview: {
        connect: {
          id: peerReviewId,
        },
      },
    },
  });
  return peerReviewItem;
}
