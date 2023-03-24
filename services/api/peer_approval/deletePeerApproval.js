import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerApproval(id) {
  const prisma = PRISMA_CLIENT;

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
