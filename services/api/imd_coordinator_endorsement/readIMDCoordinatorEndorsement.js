import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorEndorsement(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorEndorsement =
      await prisma.iMDCoordinatorEndorsement.findFirstOrThrow({
        where: {
          ...filter,
          id,
        },
      });

    return iMDCoordinatorEndorsement;
  } catch (error) {
    throw error;
  }
}
