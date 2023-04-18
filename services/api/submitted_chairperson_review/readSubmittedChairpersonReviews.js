import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedChairpersonReviews({
  limit,
  page,
  chairpersonReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedChairpersonReview;

  const submittedChairpersonReviews =
    await prisma.submittedChairpersonReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [
          accessibility,
          {
            chairpersonReviewId: {
              contains: chairpersonReviewId,
            },
          },
        ],
      },
    });
  const total = await prisma.submittedChairpersonReview.count({
    where: {
      AND: [
        accessibility,
        {
          chairpersonReviewId: {
            contains: chairpersonReviewId,
          },
        },
      ],
    },
  });

  return { data: submittedChairpersonReviews, total };
}
