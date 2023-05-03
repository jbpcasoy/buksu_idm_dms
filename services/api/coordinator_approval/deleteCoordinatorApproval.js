import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCoordinatorApproval(id) {
  const prisma = PRISMA_CLIENT;

  const coordinatorApproval = await prisma.coordinatorApproval.delete({
    where: {
      id,
    },
  });

  return coordinatorApproval;
}
