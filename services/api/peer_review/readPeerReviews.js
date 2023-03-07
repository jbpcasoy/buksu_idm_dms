import { PrismaClient } from "@prisma/client";

export default async function readPeerReviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const peerReviews = await prisma.peerReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.peerReview.count();
    return { data: peerReviews, total };
  } catch (error) {
    throw error;
  }
}
