import { PrismaClient } from "@prisma/client";

export default async function readChairpersonSuggestion(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonSuggestion =
      await prisma.chairpersonSuggestion.findUniqueOrThrow({
        where: {
          id,
        },
        include: {
          SubmittedChairpersonReview: true,
        },
      });
    return chairpersonSuggestion;
  } catch (error) {
    throw error;
  }
}
