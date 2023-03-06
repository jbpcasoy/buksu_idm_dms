import { PrismaClient } from "@prisma/client";

export default async function deleteImReviewQuestion(id) {
  const prisma = new PrismaClient();

  const iMReviewQuestion = await prisma.iMReviewQuestion.delete({
    where: {
      id,
    },
  });

  return iMReviewQuestion;
}
