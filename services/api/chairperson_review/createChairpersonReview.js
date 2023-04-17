import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonReview({ chairpersonId, iMId }) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReview = await prisma.chairpersonReview.create({
    data: {
      chairpersonId,
      iMId,
    },
  });
  return chairpersonReview;
}
