import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedQamisSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedQamisSuggestion;

  const submittedQamisSuggestions =
    await prisma.submittedQamisSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });
  const total = await prisma.submittedQamisSuggestion.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: submittedQamisSuggestions, total };
}
