import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedChairpersonReview(id) {
  const prisma = PRISMA_CLIENT;

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
