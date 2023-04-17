import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorSuggestions({
  limit,
  page,
  iMId,
}) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestions =
    await prisma.iMDCoordinatorSuggestion.findMany({
      take: limit,
      skip: page && limit ? (page - 1) * limit : undefined,
      where: {
        iMId,
      },
    });
  const total = await prisma.iMDCoordinatorSuggestion.count({
    where: {
      iMId,
    },
  });

  return { data: iMDCoordinatorSuggestions, total };
}
