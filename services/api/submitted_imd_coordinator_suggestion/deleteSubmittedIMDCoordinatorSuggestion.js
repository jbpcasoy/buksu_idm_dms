import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedIMDCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedIMDCoordinatorSuggestion =
    await prisma.submittedIMDCoordinatorSuggestion.delete({
      where: { id },
    });
  return submittedIMDCoordinatorSuggestion;
}
