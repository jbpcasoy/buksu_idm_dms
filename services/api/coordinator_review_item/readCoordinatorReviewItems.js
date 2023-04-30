import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorReviewItems({
  limit,
  page,
  questionId,
  coordinatorReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorReviewItem;

  const coordinatorReviewItems = await prisma.coordinatorReviewItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          questionId: {
            contains: questionId,
          },
          coordinatorReviewId: { contains: coordinatorReviewId },
        },
      ],
    },
  });
  const total = await prisma.coordinatorReviewItem.count({
    where: {
      AND: [
        accessibility,
        {
          questionId: {
            contains: questionId,
          },
          coordinatorReviewId: { contains: coordinatorReviewId },
        },
      ],
    },
  });

  return { data: coordinatorReviewItems, total };
}
