import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorSuggestions({
  limit,
  page,
  submittedCoordinatorReviewId,
}) {
  const prisma = new PrismaClient();
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
