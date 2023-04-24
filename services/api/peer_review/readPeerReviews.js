import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerReviews({
  limit,
  page,
  facultyId,
  iMId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerReview;

  const peerReviews = await prisma.peerReview.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          facultyId: {
            contains: facultyId,
          },
          iMId: {
            contains: iMId,
          },
        },
      ],
    },
  });

  const total = await prisma.peerReview.count({
    where: {
      AND: [
        accessibility,
        {
          facultyId: {
            contains: facultyId,
          },
          iMId: {
            contains: iMId,
          },
        },
      ],
    },
  });
  return { data: peerReviews, total };
}
