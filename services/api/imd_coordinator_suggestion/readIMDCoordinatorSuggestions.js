import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIMDCoordinatorSuggestions({
  limit,
  page,
  iMId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IMDCoordinatorSuggestion;

  const iMDCoordinatorSuggestions =
    await prisma.iMDCoordinatorSuggestion.findMany({
      take: limit,
      skip: page && limit ? (page - 1) * limit : undefined,
      where: {
        AND: [
          accessibility,
          {
            iMId,
          },
        ],
      },
    });
  const total = await prisma.iMDCoordinatorSuggestion.count({
    where: {
      AND: [
        accessibility,
        {
          iMId,
        },
      ],
    },
  });

  return { data: iMDCoordinatorSuggestions, total };
}
