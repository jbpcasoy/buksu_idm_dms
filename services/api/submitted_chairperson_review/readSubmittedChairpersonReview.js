import { PrismaClient } from "@prisma/client";

export default async function readSubmittedChairpersonReview(id) {
  const prisma = new PrismaClient();

  try {
    const submittedChairpersonReview =
      await prisma.submittedChairpersonReview.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return submittedChairpersonReview;
  } catch (error) {
    throw error;
  }
}
