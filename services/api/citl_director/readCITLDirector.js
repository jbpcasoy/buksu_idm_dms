import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCITLDirector(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirector = await prisma.cITLDirector.findFirstOrThrow({
      where: { ...filter, id },
    });
    return cITLDirector;
  } catch (error) {
    throw error;
  }
}
