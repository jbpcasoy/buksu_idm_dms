import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMReviewQuestion(id) {
  const prisma = PRISMA_CLIENT;
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
