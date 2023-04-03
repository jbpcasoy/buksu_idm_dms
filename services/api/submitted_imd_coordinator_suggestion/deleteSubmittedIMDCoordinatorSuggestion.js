import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedIMDCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedIMDCoordinatorSuggestion =
      await prisma.submittedIMDCoordinatorSuggestion.delete({
        where: { id },
      });
    return submittedIMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
