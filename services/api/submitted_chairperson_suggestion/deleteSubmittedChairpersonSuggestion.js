import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedChairpersonSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.delete({
      where: {
        id,
      },
    });
  return submittedChairpersonSuggestion;
}
