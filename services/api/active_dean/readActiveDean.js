import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveDean({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveDean;

  try {
    const activeDean = await prisma.activeDean.findFirst({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
    });

    return activeDean;
  } catch (error) {
    throw error;
  }
}
