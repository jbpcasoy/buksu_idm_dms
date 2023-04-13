import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveFaculty({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveFaculty;

  try {
    const activeFaculty = await prisma.activeFaculty.findFirst({
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

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
