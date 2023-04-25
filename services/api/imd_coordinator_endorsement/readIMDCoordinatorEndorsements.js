import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readIMDCoordinatorEndorsements({
  limit,
  page,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).IMDCoordinatorEndorsement;

  const iMDCoordinatorEndorsements =
    await prisma.iMDCoordinatorEndorsement.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });

  const total = await prisma.iMDCoordinatorEndorsement.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: iMDCoordinatorEndorsements, total };
}
