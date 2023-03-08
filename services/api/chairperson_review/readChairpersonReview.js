import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReview(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReview = await prisma.chairpersonReview.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
