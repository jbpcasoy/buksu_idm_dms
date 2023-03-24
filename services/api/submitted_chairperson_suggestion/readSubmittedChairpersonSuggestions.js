import { PrismaClient } from "@prisma/client";

export default async function readSubmittedChairpersonSuggestions({
  limit,
  page,
}) {
  try {
    const prisma = new PrismaClient();

    const submittedChairpersonSuggestion =
      await prisma.submittedChairpersonSuggestion.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
    const total = await prisma.submittedChairpersonSuggestion.count();
    return { data: submittedChairpersonSuggestion, total };
  } catch (error) {
    throw error;
  }
}
