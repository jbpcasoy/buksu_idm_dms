import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorSuggestion(id) {
  const prisma = new PrismaClient();

  const coordinatorSuggestion =
    await prisma.coordinatorSuggestion.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        SubmittedCoordinatorReview: true,
      },
    });
  return coordinatorSuggestion;
}
