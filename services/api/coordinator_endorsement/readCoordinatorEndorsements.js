import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
export default async function readCoordinatorEndorsements({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorEndorsement;

  const coordinatorEndorsements = await prisma.coordinatorEndorsement.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });
  const total = await prisma.coordinatorEndorsement.count({
    where: {
      AND: [accessibility],
    },
  });

  return { data: coordinatorEndorsements, total };
}
