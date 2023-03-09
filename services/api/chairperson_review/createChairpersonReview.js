import { PrismaClient } from "@prisma/client";

export default async function createChairpersonReview({ chairpersonId, iMId }) {
  const prisma = new PrismaClient();

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
