import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinator(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinator = await prisma.iMDCoordinator.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });

    return iMDCoordinator;
  } catch (error) {
    throw error;
  }
}
