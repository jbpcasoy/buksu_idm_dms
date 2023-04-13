import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveDeans({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveDean;

  try {
    const activeDeans = await prisma.activeDean.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [accessibility],
      },
    });
    const total = await prisma.activeDean.count({
      where: {
        AND: [accessibility],
      },
    });

    return { data: activeDeans, total };
  } catch (error) {
    throw error;
  }
}
