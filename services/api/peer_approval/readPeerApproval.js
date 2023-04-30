import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerApproval(id) {
  const prisma = PRISMA_CLIENT;

  const peerApproval = await prisma.peerApproval.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return peerApproval;
}
