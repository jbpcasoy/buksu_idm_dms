import { PrismaClient } from "@prisma/client";

export default async function readPeerReviews({
  limit,
  page,
  facultyId,
  iMId,
}) {
  const prisma = new PrismaClient();

  try {
    const peerReviews = await prisma.peerReview.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        facultyId: {
          contains: facultyId,
        },
        iMId: {
          contains: iMId,
        },
      },
    });

    const total = await prisma.peerReview.count();
    return { data: peerReviews, total };
  } catch (error) {
    throw error;
  }
}
