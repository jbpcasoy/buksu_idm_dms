import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveChairperson({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;

  const accessibility = accessibleBy(ability).ActiveChairperson;

  try {
    const activeChairperson = await prisma.activeChairperson.findFirst({
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
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
