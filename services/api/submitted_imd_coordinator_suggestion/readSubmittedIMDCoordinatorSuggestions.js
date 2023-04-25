import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedIMDCoordinatorSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedIMDCoordinatorSuggestion;

  const submittedIMDCoordinatorSuggestions =
    await prisma.submittedIMDCoordinatorSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: { AND: [accessibility] },
    });
  const total = await prisma.submittedIMDCoordinatorSuggestion.count({
    where: { AND: [accessibility] },
  });
  return { data: submittedIMDCoordinatorSuggestions, total };
}
