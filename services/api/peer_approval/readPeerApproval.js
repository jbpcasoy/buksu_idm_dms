import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerApproval(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerApproval = await prisma.peerApproval.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return peerApproval;
  } catch (error) {
    throw error;
  }
}
