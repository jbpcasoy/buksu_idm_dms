import { PrismaClient } from "@prisma/client";

export default async function createCoordinatorReviewItem({
  coordinatorReviewId,
  answer,
  questionId,
}) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviewItem = await prisma.coordinatorReviewItem.create({
      data: {
        CoordinatorReview: {
          connect: {
            id: coordinatorReviewId,
          },
        },
        answer,
        questionId,
      },
    });

    return coordinatorReviewItem;
  } catch (error) {
    throw error;
  }
}
