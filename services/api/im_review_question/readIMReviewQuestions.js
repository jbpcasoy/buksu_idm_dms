import { PrismaClient } from "@prisma/client";

export default async function readIMReviewQuestions({
  limit,
  page,
  iMReviewSection,
}) {
  const prisma = new PrismaClient();

  try {
    const iMReviewQuestions = await prisma.iMReviewQuestion.findMany({
      where: {
        iMReviewSectionId: {
          contains: iMReviewSection,
        },
      },
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.iMReviewQuestion.count({
      where: {
        iMReviewSectionId: {
          contains: iMReviewSection,
        },
      },
    });

    return { data: iMReviewQuestions, total };
  } catch (error) {
    throw error;
  }
}
