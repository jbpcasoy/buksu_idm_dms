import { PrismaClient } from "@prisma/client";

export default async function readSubmittedCoordinatorReviews({
  limit,
  page,
  coordinatorReviewId,
}) {
  const prisma = new PrismaClient();

  try {
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
    const total = await prisma.submittedCoordinatorReview.count();
    return { data: submittedCoordinatorReviews, total };
  } catch (error) {
    throw error;
  }
}
