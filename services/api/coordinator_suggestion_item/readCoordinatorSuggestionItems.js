import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorSuggestionItems({
  limit,
  page,
  coordinatorSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestionItems =
    await prisma.coordinatorSuggestionItem.findMany({
      take: limit,
      skip: limit && page ? (page - 1) * limit : undefined,
      where: {
        coordinatorSuggestionId: {
          contains: coordinatorSuggestionId,
        },
      },
    });
  const total = await prisma.coordinatorSuggestionItem.count({
    where: {
      coordinatorSuggestionId: {
        contains: coordinatorSuggestionId,
      },
    },
  });
  return { data: coordinatorSuggestionItems, total };
}
