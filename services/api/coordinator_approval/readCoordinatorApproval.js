import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorApproval(id) {
  const prisma = PRISMA_CLIENT;

  const coordinatorApproval =
    await prisma.coordinatorApproval.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return coordinatorApproval;
}
