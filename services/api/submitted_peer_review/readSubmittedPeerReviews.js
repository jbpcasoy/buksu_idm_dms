import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedPeerReviews({
  limit,
  page,
  peerReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedPeerReviews = await prisma.submittedPeerReview.findMany({
      take: limit,
      skip: page ? (page - 1) * limit : undefined,
      where: {
        peerReviewId: {
          contains: peerReviewId,
        },
      },
    });

    const total = await prisma.submittedPeerReview.count({
      where: {
        peerReviewId: {
          contains: peerReviewId,
        },
      },
    });

    return { data: submittedPeerReviews, total };
  } catch (error) {
    throw error;
  }
}
