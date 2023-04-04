import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveCITLDirector(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeCITLDirector = await prisma.activeCITLDirector.findFirstOrThrow(
      {
        where: {
          ...filter,
          id,
        },
      }
    );
    return activeCITLDirector;
  } catch (error) {
    throw error;
  }
}
