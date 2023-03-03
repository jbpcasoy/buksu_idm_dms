import { PrismaClient } from "@prisma/client";

export default async function readPeerApproval(id) {
  const prisma = new PrismaClient();

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
