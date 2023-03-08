import { PrismaClient } from "@prisma/client";

export default async function createPeerReviewItem({
  questionId,
  answer,
  peerReviewId,
}) {
  const prisma = new PrismaClient();

  try {
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
  } catch (error) {
    throw error;
  }
}
