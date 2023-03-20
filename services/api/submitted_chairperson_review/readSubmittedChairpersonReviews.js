import { PrismaClient } from "@prisma/client";

export default async function readSubmittedChairpersonReviews({
  limit,
  page,
  chairpersonReviewId,
}) {
  const prisma = new PrismaClient();

  try {
    const submittedChairpersonReviews =
      await prisma.submittedChairpersonReview.findMany({
        take: limit,
        skip: (page - 1) * limit,
        where: {
          chairpersonReviewId: {
            contains: chairpersonReviewId,
          },
        },
      });
    const total = await prisma.submittedChairpersonReview.count({
      where: {
        chairpersonReviewId: {
          contains: chairpersonReviewId,
        },
      },
    });

    return { data: submittedChairpersonReviews, total };
  } catch (error) {
    throw error;
  }
}
