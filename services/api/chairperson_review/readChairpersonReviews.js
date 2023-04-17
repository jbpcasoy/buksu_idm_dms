import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonReviews({
  limit,
  page,
  iMId,
  chairpersonId,
}) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviews = await prisma.chairpersonReview.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      chairpersonId,
      iMId,
    },
  });
  const total = await prisma.chairpersonReview.count({
    where: {
      chairpersonId,
      iMId,
    },
  });

  return { data: chairpersonReviews, total };
}
