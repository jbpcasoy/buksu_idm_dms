import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedCoordinatorSuggestions({
  limit,
  page,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

  const total = await prisma.submittedCoordinatorSuggestion.count();

  return { data: submittedCoordinatorSuggestion, total };
}
