import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonReviewItems({
  limit,
  page,
  questionId,
  chairpersonReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonReviewItem;

  const chairpersonReviewItems = await prisma.chairpersonReviewItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          questionId,
          chairpersonReviewId,
        },
      ],
    },
  });
  const total = await prisma.chairpersonReviewItem.count({
    where: {
      AND: [
        accessibility,
        {
          questionId,
          chairpersonReviewId,
        },
      ],
    },
  });
  return { data: chairpersonReviewItems, total };
}
