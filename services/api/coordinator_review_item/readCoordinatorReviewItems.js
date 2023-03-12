import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReviewItems({
  limit,
  page,
  questionId,
  coordinatorReviewId,
}) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviewItems = await prisma.coordinatorReviewItem.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        questionId: {
          contains: questionId,
        },
        coordinatorReviewId: { contains: coordinatorReviewId },
      },
    });
    const total = await prisma.coordinatorReviewItem.count({
      where: {
        questionId: {
          contains: questionId,
        },
        coordinatorReviewId: { contains: coordinatorReviewId },
      },
    });

    return { data: coordinatorReviewItems, total };
  } catch (error) {
    throw error;
  }
}
