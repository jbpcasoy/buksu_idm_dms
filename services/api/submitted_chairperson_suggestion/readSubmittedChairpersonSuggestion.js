import { PrismaClient } from "@prisma/client";

export default async function readSubmittedChairpersonSuggestion(id) {
  const prisma = new PrismaClient();

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return submittedChairpersonSuggestion;
}
