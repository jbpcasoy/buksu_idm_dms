import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonSuggestion({
  submittedChairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;

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
}
