import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorPreviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorPreviews = await prisma.coordinatorReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.coordinatorReview.count();

    return { data: coordinatorPreviews, total };
  } catch (error) {
    throw error;
  }
}
