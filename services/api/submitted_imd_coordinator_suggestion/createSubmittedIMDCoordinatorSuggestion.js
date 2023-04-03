import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createSubmittedIMDCoordinatorSuggestion({
  iMDCoordinatorSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedIMDCoordinatorSuggestion =
      await prisma.submittedIMDCoordinatorSuggestion.create({
        data: {
          iMDCoordinatorSuggestionId,
        },
      });

    return submittedIMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
