import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinatorSuggestion({
  submittedCoordinatorReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestion = await prisma.coordinatorSuggestion.create({
    data: {
      SubmittedCoordinatorReview: {
        connect: {
          id: submittedCoordinatorReviewId,
        },
      },
    },
  });

  return coordinatorSuggestion;
}
