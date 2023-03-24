import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinatorReviewItem({
  coordinatorReviewId,
  answer,
  questionId,
}) {
  const prisma = PRISMA_CLIENT;

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
