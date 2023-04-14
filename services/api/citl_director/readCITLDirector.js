import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCITLDirector({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CITLDirector;

  try {
    const cITLDirector = await prisma.cITLDirector.findFirst({
      where: { AND: [accessibility, { ...filter, id }] },
    });
    return cITLDirector;
  } catch (error) {
    throw error;
  }
}
