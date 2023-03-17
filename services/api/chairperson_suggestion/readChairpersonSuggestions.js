import { PrismaClient } from "@prisma/client";

export default async function readChairpersonSuggestions({
  limit,
  page,
  submittedChairpersonReviewId,
}) {
  const prisma = new PrismaClient();
  try {
    const chairpersonSuggestions = await prisma.chairpersonSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        submittedChairpersonReviewId: {
          contains: submittedChairpersonReviewId,
        },
      },
    });
    const total = await prisma.chairpersonSuggestion.count({
      where: {
        submittedChairpersonReviewId: {
          contains: submittedChairpersonReviewId,
        },
      },
    });

    return { data: chairpersonSuggestions, total };
  } catch (error) {
    throw error;
  }
}
