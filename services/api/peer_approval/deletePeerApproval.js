import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerApproval(id) {
  const prisma = PRISMA_CLIENT;

  const peerApproval = await prisma.peerApproval.delete({
    where: {
      id,
    },
  });

  return peerApproval;
}
