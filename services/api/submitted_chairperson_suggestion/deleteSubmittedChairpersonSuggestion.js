import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedChairpersonSuggestion(id) {
  const prisma = new PrismaClient();

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.delete({
      where: {
        id,
      },
    });
  return submittedChairpersonSuggestion;
}
