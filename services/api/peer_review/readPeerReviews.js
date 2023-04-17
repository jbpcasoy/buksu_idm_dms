import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerReviews({
  limit,
  page,
  facultyId,
  iMId,
}) {
  const prisma = PRISMA_CLIENT;

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

  const total = await prisma.peerReview.count({
    where: {
      facultyId: {
        contains: facultyId,
      },
      iMId: {
        contains: iMId,
      },
    },
  });
  return { data: peerReviews, total };
}
