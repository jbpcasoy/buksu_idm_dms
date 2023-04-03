import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorReviewItems({
  limit,
  page,
  questionId,
  coordinatorReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorReviewItems = await prisma.coordinatorReviewItem.findMany({
      take: limit,
      skip: limit && page ? (page - 1) * limit : undefined,
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
