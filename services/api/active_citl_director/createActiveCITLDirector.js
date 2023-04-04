import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveCITLDirector({ cITLDirectorId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeCITLDirector = await prisma.activeCITLDirector.create({
      data: {
        CITLDirector: {
          connect: {
            id: cITLDirectorId,
          },
        },
      },
    });

    return activeCITLDirector;
  } catch (error) {
    throw error;
  }
}
