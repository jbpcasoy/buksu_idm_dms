import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readQamisSuggestionItems({
  limit,
  page,
  qamisSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).QamisSuggestionItem;

  const qamisSuggestionItems = await prisma.qamisSuggestionItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          qamisSuggestionId: { contains: qamisSuggestionId },
        },
      ],
    },
  });

  const total = await prisma.qamisSuggestionItem.count({
    where: {
      AND: [
        accessibility,
        {
          qamisSuggestionId: { contains: qamisSuggestionId },
        },
      ],
    },
  });

  return { data: qamisSuggestionItems, total };
}
