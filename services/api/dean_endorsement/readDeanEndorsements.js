import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readDeanEndorsements({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).DeanEndorsement;

  const deanEndorsements = await prisma.deanEndorsement.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });
  const total = await prisma.deanEndorsement.count({
    where: {
      AND: [accessibility],
    },
  });

  return { data: deanEndorsements, total };
}
