import { PrismaClient } from "@prisma/client";

export default async function readSubmittedChairpersonReviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const submittedChairpersonReviews =
      await prisma.submittedChairpersonReview.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
    const total = await prisma.submittedChairpersonReview.count();

    return { data: submittedChairpersonReviews, total };
  } catch (error) {
    throw error;
  }
}
