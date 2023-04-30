import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveChairpersons({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveChairperson;

  const activeChairpersons = await prisma.activeChairperson.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });

  const total = await prisma.activeChairperson.count({
    where: {
      AND: [accessibility],
    },
  });

  return { data: activeChairpersons, total };
}
