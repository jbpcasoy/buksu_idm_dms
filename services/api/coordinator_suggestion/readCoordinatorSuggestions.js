import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorSuggestions({
  limit,
  page,
  submittedCoordinatorReviewId,
}) {
  const prisma = PRISMA_CLIENT;
  try {
    const coordinatorSuggestions = await prisma.coordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        submittedCoordinatorReviewId: {
          contains: submittedCoordinatorReviewId,
        },
      },
    });
    const total = await prisma.coordinatorSuggestion.count();
    return { data: coordinatorSuggestions, total };
  } catch (error) {
    throw error;
  }
}
