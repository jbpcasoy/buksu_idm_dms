import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedChairpersonSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return submittedChairpersonSuggestion;
}
