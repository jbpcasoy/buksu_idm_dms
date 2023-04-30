import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCITLDirector({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CITLDirector;

  const cITLDirector = await prisma.cITLDirector.findFirstOrThrow({
    where: { AND: [accessibility, { ...filter, id }] },
  });
  return cITLDirector;
}
