import { PrismaClient } from "@prisma/client";

export default async function createIMReviewQuestion({
  iMReviewSectionId,
  question,
}) {
  const prisma = new PrismaClient();

  try {
    const iMReviewQuestion = await prisma.iMReviewQuestion.create({
      data: {
        IMReviewSection: {
          connect: {
            id: iMReviewSectionId,
          },
        },
        question,
      },
    });
    return iMReviewQuestion;
  } catch (error) {
    throw error;
  }
}
