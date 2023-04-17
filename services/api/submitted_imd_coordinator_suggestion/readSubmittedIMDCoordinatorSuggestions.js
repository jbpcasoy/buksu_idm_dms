import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedIMDCoordinatorSuggestions({
  limit,
  page,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedIMDCoordinatorSuggestions =
    await prisma.submittedIMDCoordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
  const total = await prisma.submittedIMDCoordinatorSuggestion.count();
  return { data: submittedIMDCoordinatorSuggestions, total };
}
