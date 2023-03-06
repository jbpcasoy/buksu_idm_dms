import { PrismaClient } from "@prisma/client";

export default async function updateIMReviewQuestion(id, { question }) {
  const prisma = new PrismaClient();

  try {
    const iMReviewQuestion = await prisma.iMReviewQuestion.update({
      where: {
        id,
      },
      data: {
        question,
      },
    });

    return iMReviewQuestion;
  } catch (error) {
    throw error;
  }
}
