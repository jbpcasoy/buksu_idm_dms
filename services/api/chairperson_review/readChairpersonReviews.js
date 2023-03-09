import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReviews({
  limit,
  page,
  iMId,
  chairpersonId,
}) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviews = await prisma.chairpersonReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        chairpersonId,
        iMId,
      },
    });
    const total = await prisma.chairpersonReview.count({
      where: {
        chairpersonId,
        iMId,
      },
    });

    return { data: chairpersonReviews, total };
  } catch (error) {
    throw error;
  }
}
