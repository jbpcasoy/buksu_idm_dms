import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorEndorsement(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorEndorsement =
    await prisma.coordinatorEndorsement.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });

  return coordinatorEndorsement;
}
