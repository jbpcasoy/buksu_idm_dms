import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteIMDCoordinator(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinator = await prisma.iMDCoordinator.delete({
      where: {
        id,
      },
    });

    return iMDCoordinator;
  } catch (error) {
    throw error;
  }
}
