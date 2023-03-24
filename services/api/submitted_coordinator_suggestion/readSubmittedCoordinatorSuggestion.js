import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedCoordinatorSuggestion =
      await prisma.submittedCoordinatorSuggestion.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
