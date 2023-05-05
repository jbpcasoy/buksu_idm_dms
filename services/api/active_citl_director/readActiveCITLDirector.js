import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readActiveCITLDirector({
  id,
  ability,
  filter = {},
}) {
  const prisma = PRISMA_CLIENT;

  const accessibility = accessibleBy(ability).ActiveCITLDirector;

  const activeCITLDirector = await prisma.activeCITLDirector.findFirstOrThrow({
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
  return activeCITLDirector;
}
