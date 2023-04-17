import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairperson({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Chairperson;

  const chairperson = await prisma.chairperson.findFirstOrThrow({
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

  return chairperson;
}
