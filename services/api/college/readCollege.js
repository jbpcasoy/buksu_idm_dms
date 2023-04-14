import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCollege({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).College;

  try {
    const college = await prisma.college.findFirst({
      where: {
        AND: [
          accessibility,
          {
            id,
          },
        ],
      },
    });

    return college;
  } catch (error) {
    throw error;
  }
}
