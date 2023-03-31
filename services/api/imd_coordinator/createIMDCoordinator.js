import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createIMDCoordinator({ userId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinator = await prisma.iMDCoordinator.create({
      data: {
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return iMDCoordinator;
  } catch (error) {
    throw error;
  }
}
