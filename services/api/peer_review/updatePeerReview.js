import { PrismaClient } from "@prisma/client";

export default async function updatePeerReview(id, { submitted }) {
  const prisma = new PrismaClient();

  try {
    const peerReview = await prisma.peerReview.update({
      where: {
        id,
      },
      data: {
        submitted,
      },
    });
    return peerReview;
  } catch (error) {
    throw error;
  }
}
