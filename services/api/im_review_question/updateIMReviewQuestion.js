import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateIMReviewQuestion(id, { question }) {
  const prisma = PRISMA_CLIENT;

  const iMReviewQuestion = await prisma.iMReviewQuestion.update({
    where: {
      id,
    },
    data: {
      question,
    },
  });

  return iMReviewQuestion;
}
