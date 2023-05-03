import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorApprovals({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const coordinatorApprovals = await prisma.coordinatorApproval.findMany({
    take: limit,
    skip: (page - 1) * limit,
  });

  return coordinatorApprovals;
}
