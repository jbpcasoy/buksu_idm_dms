import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveIMDCoordinators({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveIMDCoordinator;

  const activeIMDCoordinators = await prisma.activeIMDCoordinator.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });

  const total = await prisma.activeIMDCoordinator.count({
    where: {
      AND: [accessibility],
    },
  });

  return { data: activeIMDCoordinators, total };
}
