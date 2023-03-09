import { PrismaClient } from "@prisma/client";

export default async function updateChairpersonReviewItem(id, { answer }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonReviewItem = await prisma.chairpersonReviewItem.update({
      where: {
        id,
      },
      data: { answer },
    });
    return chairpersonReviewItem;
  } catch (error) {
    throw error;
  }
}
