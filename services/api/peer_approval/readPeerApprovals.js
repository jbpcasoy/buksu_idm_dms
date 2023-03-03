import { PrismaClient } from "@prisma/client";

export default async function readPeerApprovals({ limit, page }) {
  const prisma = new PrismaClient();

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
