import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createChairpersonReview({ chairpersonId, iMId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonReview = await prisma.chairpersonReview.create({
      data: {
        chairpersonId,
        iMId,
      },
    });
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
