import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.delete({
      where: {
        id,
      },
    });

  return submittedCoordinatorSuggestion;
}
