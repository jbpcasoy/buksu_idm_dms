import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviews = await prisma.coordinatorReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.coordinatorReview.count();

    return { data: coordinatorReviews, total };
  } catch (error) {
    throw error;
  }
}
