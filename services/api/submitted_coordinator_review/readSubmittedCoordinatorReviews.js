import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedCoordinatorReviews({
  limit,
  page,
  coordinatorReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedCoordinatorReviews =
    await prisma.submittedCoordinatorReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        coordinatorReviewId: {
          contains: coordinatorReviewId,
        },
      },
    });
  const total = await prisma.submittedCoordinatorReview.count({
    where: {
      coordinatorReviewId: {
        contains: coordinatorReviewId,
      },
    },
  });
  return { data: submittedCoordinatorReviews, total };
}
