import { PrismaClient } from "@prisma/client";

export default async function createChairpersonReviewItem({
  questionId,
  answer,
  chairpersonReviewId,
}) {
  const prisma = new PrismaClient();

  try {
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
  } catch (error) {
    throw error;
  }
}
