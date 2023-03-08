import { PrismaClient } from "@prisma/client";

export default async function createChairpersonReview({ facultyId, iMId }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReview = await prisma.chairpersonReview.create({
      data: {
        facultyId,
        iMId,
      },
    });
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
