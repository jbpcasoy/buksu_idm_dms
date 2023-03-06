import { PrismaClient } from "@prisma/client";

export default async function readIMReviewQuestion(id) {
  const prisma = new PrismaClient();
  try {
    const iMReviewQuestion = await prisma.iMReviewQuestion.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return iMReviewQuestion;
  } catch (error) {
    throw error;
  }
}
