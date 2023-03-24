import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedCoordinatorSuggestion(id) {
  try {
    const prisma = PRISMA_CLIENT;

    const submittedCoordinatorSuggestion =
      await prisma.submittedCoordinatorSuggestion.delete({
        where: {
          id,
        },
      });

    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
