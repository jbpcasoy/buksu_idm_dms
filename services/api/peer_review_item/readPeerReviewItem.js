import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  const peerReviewItem = await prisma.peerReviewItem.findUniqueOrThrow({
    where: {
      id,
    },
  });

  return peerReviewItem;
}
