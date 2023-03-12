import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReviews({
  limit,
  page,
  iMId,
  coordinatorId,
}) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviews = await prisma.coordinatorReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        coordinatorId: {
          contains: coordinatorId,
        },
        iMId: { contains: iMId },
      },
    });
    const total = await prisma.coordinatorReview.count({
      where: {
        coordinatorId: {
          contains: coordinatorId,
        },
        iMId: { contains: iMId },
      },
    });

    return { data: coordinatorReviews, total };
  } catch (error) {
    throw error;
  }
}
