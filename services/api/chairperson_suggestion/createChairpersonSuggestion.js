import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonSuggestion({
  submittedChairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;
  try {
    const chairpersonSuggestion = await prisma.chairpersonSuggestion.create({
      data: {
        SubmittedChairpersonReview: {
          connect: {
            id: submittedChairpersonReviewId,
          },
        },
      },
    });
    return chairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
