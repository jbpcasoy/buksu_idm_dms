import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedCoordinatorReviews({
  limit,
  page,
  coordinatorReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedCoordinatorReview;

  const submittedCoordinatorReviews =
    await prisma.submittedCoordinatorReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [
          accessibility,
          {
            coordinatorReviewId: {
              contains: coordinatorReviewId,
            },
          },
        ],
      },
    });
  const total = await prisma.submittedCoordinatorReview.count({
    where: {
      AND: [
        accessibility,
        {
          coordinatorReviewId: {
            contains: coordinatorReviewId,
          },
        },
      ],
    },
  });
  return { data: submittedCoordinatorReviews, total };
}
