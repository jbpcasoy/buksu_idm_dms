import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonReviewItem({
  questionId,
  answer,
  chairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviewItem = await prisma.chairpersonReviewItem.create({
    data: {
      answer,
      questionId,
      ChairpersonReview: {
        connect: {
          id: chairpersonReviewId,
        },
      },
    },
  });
  return chairpersonReviewItem;
}
