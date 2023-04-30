import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createIMReviewQuestion({
  iMReviewSectionId,
  question,
}) {
  const prisma = PRISMA_CLIENT;

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
}
