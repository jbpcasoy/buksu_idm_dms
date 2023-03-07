import { PrismaClient } from "@prisma/client";

export default async function readPeerReviewItems({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const peerReviewItems = await prisma.peerReviewItem.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.peerReviewItem.count();

    return { data: peerReviewItems, total };
  } catch (error) {
    throw error;
  }
}
