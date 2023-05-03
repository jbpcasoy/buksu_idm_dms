import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorReviews({
  limit,
  page,
  iMId,
  coordinatorId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = await accessibleBy(ability).CoordinatorReview;

  const coordinatorReviews = await prisma.coordinatorReview.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          coordinatorId: {
            contains: coordinatorId,
          },
          iMId: { contains: iMId },
        },
      ],
    },
  });
  const total = await prisma.coordinatorReview.count({
    where: {
      AND: [
        accessibility,
        {
          coordinatorId: {
            contains: coordinatorId,
          },
          iMId: { contains: iMId },
        },
      ],
    },
  });

  return { data: coordinatorReviews, total };
}
