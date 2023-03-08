import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReviewItems({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviewItems = await prisma.chairpersonReviewItem.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.chairpersonReviewItem.count();
    return { data: chairpersonReviewItems, total };
  } catch (error) {
    throw error;
  }
}
