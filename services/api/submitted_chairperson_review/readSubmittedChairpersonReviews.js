import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedChairpersonReviews({
  limit,
  page,
  chairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;

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
}
