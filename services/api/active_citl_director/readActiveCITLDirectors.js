import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveCITLDirectors({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveCITLDirector;

  const activeCITLDirectors = await prisma.activeCITLDirector.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });
  const total = await prisma.activeCITLDirector.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: activeCITLDirectors, total };
}
