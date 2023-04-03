import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedIMDCoordinatorSuggestion(
  id,
  filter = {}
) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedIMDCoordinatorSuggestion =
      await prisma.submittedIMDCoordinatorSuggestion.findFirstOrThrow({
        where: {
          ...filter,
          id,
        },
      });

    return submittedIMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
