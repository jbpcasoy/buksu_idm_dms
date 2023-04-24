import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedPeerReviews({
  limit,
  page,
  peerReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedPeerReview;

  const submittedPeerReviews = await prisma.submittedPeerReview.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          peerReviewId: {
            contains: peerReviewId,
          },
        },
      ],
    },
  });

  const total = await prisma.submittedPeerReview.count({
    where: {
      AND: [
        accessibility,
        {
          peerReviewId: {
            contains: peerReviewId,
          },
        },
      ],
    },
  });

  return { data: submittedPeerReviews, total };
}
