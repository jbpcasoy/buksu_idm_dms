import { PrismaClient } from "@prisma/client";

export default async function readPeerReview(id) {
  const prisma = new PrismaClient();

  try {
    const peerReview = await prisma.peerReview.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return peerReview;
  } catch (error) {
    throw error;
  }
}
