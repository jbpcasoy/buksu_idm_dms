import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteImReviewQuestion(id) {
  const prisma = PRISMA_CLIENT;

  const iMReviewQuestion = await prisma.iMReviewQuestion.delete({
    where: {
      id,
    },
  });

  return iMReviewQuestion;
}
