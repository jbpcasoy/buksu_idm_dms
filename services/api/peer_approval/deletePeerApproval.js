import { PrismaClient } from "@prisma/client";

export default async function deletePeerApproval(id) {
  const prisma = new PrismaClient();

  try {
    const peerApproval = await prisma.peerApproval.delete({
      where: {
        id,
      },
    });

    return peerApproval;
  } catch (error) {
    throw error;
  }
}
