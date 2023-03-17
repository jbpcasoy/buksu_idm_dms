import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorSuggestionItems({
  limit,
  page,
  coordinatorSuggestionId,
}) {
  const prisma = new PrismaClient();

  try {
    const coordinatorSuggestionItems =
      await prisma.coordinatorSuggestionItem.findMany({
        take: limit,
        skip: page ? (page - 1) * limit : undefined,
        where: {
          coordinatorSuggestionId: {
            contains: coordinatorSuggestionId,
          },
        },
      });
    const total = await prisma.coordinatorSuggestionItem.count();
    return { data: coordinatorSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
