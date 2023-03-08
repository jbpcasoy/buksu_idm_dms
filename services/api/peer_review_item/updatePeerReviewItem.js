import { PrismaClient } from "@prisma/client";

export default async function updatePeerReviewItem(id, { answer }) {
  const prisma = new PrismaClient();

  try {
    const peerReviewItem = await prisma.peerReviewItem.update({
      data: {
        answer,
      },
      where: {
        id,
      },
    });
    return peerReviewItem;
  } catch (error) {
    throw error;
  }
}
