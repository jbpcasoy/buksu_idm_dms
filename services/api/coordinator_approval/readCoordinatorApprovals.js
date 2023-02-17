import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorApprovals({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorApprovals = await prisma.coordinatorApproval.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return coordinatorApprovals;
  } catch (error) {
    throw error;
  }
}
