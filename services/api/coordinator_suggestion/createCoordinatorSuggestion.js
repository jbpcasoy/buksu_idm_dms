import { PrismaClient } from "@prisma/client";

export default async function createCoordinatorSuggestion({
  submittedCoordinatorReviewId,
}) {
  const prisma = new PrismaClient();

  try {
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
  } catch (error) {
    throw error;
  }
}
