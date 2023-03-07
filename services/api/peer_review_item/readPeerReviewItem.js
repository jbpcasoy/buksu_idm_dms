import { PrismaClient } from "@prisma/client";

export default async function readPeerReviewItem(id) {
  const prisma = new PrismaClient();

  try {
    const peerReviewItem = await prisma.peerReviewItem.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return peerReviewItem;
  } catch (error) {
    throw error;
  }
}
