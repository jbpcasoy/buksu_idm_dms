import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviews = await prisma.chairpersonReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.chairpersonReview.count();

    return { data: chairpersonReviews, total };
  } catch (error) {
    throw error;
  }
}
