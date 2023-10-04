import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readQamisSuggestions({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).QamisSuggestion;

  const qamisSuggestions = await prisma.qamisSuggestion.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
      ],
    },
    include: {
      SubmittedQamisSuggestion: true,
    },
  });
  const total = await prisma.qamisSuggestion.count({
    where: {
      AND: [
        accessibility,
      ],
    },
  });

  return { data: qamisSuggestions, total };
}
