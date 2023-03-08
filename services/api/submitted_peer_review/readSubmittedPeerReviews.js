import { PrismaClient } from "@prisma/client";

export default async function readSubmittedPeerReviews({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const submittedPeerReviews = await prisma.submittedPeerReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.submittedPeerReview.count();

    return { data: submittedPeerReviews, total };
  } catch (error) {
    throw error;
  }
}
