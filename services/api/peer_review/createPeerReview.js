import { PrismaClient } from "@prisma/client";

export default async function createPeerReview({ facultyId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const peerReview = await prisma.peerReview.create({
      data: {
        facultyId,
        iMId,
      },
    });

    return peerReview;
  } catch (error) {
    throw error;
  }
}
