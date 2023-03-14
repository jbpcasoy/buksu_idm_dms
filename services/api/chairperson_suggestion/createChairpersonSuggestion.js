import { PrismaClient } from "@prisma/client";

export default async function createChairpersonSuggestion({
  submittedChairpersonReviewId,
}) {
  const prisma = new PrismaClient();
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
