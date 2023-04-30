import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readChairpersonReviews({
  limit,
  page,
  iMId,
  chairpersonId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ChairpersonReview;

  const chairpersonReviews = await prisma.chairpersonReview.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          chairpersonId,
          iMId,
        },
      ],
    },
  });
  const total = await prisma.chairpersonReview.count({
    where: {
      AND: [
        accessibility,
        {
          chairpersonId,
          iMId,
        },
      ],
    },
  });

  return { data: chairpersonReviews, total };
}
