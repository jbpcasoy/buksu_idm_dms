import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createActiveCITLDirector({ cITLDirectorId }) {
  const prisma = PRISMA_CLIENT;

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
}
