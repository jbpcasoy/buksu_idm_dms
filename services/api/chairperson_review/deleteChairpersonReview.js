import { PrismaClient } from "@prisma/client";

export default async function deleteChairpersonReview(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReview = await prisma.chairpersonReview.delete({
      where: {
        id,
      },
    });
    return chairpersonReview;
  } catch (error) {
    throw error;
  }
}
