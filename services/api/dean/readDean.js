import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readDean({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Dean;

  try {
    const dean = await prisma.dean.findFirstOrThrow({
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
    return dean;
  } catch (error) {
    throw error;
  }
}
