import { PrismaClient } from "@prisma/client";

export default async function readPeerReviewItems({
  limit,
  page,
  questionId,
  peerReviewId,
}) {
  const prisma = new PrismaClient();

  try {
    const peerReviewItems = await prisma.peerReviewItem.findMany({
      take: limit,
      skip: page ? (page - 1) * limit : undefined,
      where: {
        questionId: {
          contains: questionId,
        },
        peerReviewId: {
          contains: peerReviewId,
        },
      },
    });
    const total = await prisma.peerReviewItem.count();

    return { data: peerReviewItems, total };
  } catch (error) {
    throw error;
  }
}
