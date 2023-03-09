import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReviewItems({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviewItems = await prisma.coordinatorReviewItem.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.coordinatorReviewItem.count();

    return { data: coordinatorReviewItems, total };
  } catch (error) {
    throw error;
  }
}
