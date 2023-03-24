import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

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
