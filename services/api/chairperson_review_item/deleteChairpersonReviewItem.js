import { PrismaClient } from "@prisma/client";

export default async function deleteChairpersonReviewItem(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviewItem = await prisma.chairpersonReviewItem.delete({
      where: {
        id,
      },
    });
    return chairpersonReviewItem;
  } catch (error) {
    throw error;
  }
}
