import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedChairpersonSuggestions({
  limit,
  page,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
  const total = await prisma.submittedChairpersonSuggestion.count();
  return { data: submittedChairpersonSuggestion, total };
}
