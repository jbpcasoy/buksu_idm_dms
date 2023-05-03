import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedCoordinatorSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedCoordinatorSuggestion;

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: { AND: [accessibility] },
    });

  const total = await prisma.submittedCoordinatorSuggestion.count({
    where: { AND: [accessibility] },
  });

  return { data: submittedCoordinatorSuggestion, total };
}
