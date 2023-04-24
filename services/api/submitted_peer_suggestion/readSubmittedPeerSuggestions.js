import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readSubmittedPeerSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).SubmittedPeerSuggestion;

  const submittedPeerSuggestions =
    await prisma.submittedPeerSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });
  const total = await prisma.submittedPeerSuggestion.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: submittedPeerSuggestions, total };
}
