import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedChairpersonSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = await accessibleBy(ability)
    .SubmittedChairpersonSuggestion;

  const submittedChairpersonSuggestion =
    await prisma.submittedChairpersonSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });
  const total = await prisma.submittedChairpersonSuggestion.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: submittedChairpersonSuggestion, total };
}
