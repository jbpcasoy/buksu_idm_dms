import { PrismaClient } from "@prisma/client";

export default async function readSubmittedCoordinatorSuggestions({
  limit,
  page,
}) {
  const prisma = new PrismaClient();

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

  const total = await prisma.submittedCoordinatorSuggestion.count();

  return { data: submittedCoordinatorSuggestion, total };
}
