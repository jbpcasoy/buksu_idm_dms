import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerApprovals({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerApprovals = await prisma.peerApproval.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.peerApproval.count();
    return { data: peerApprovals, total };
  } catch (error) {
    throw error;
  }
}
