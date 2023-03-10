import { PrismaClient } from "@prisma/client";

export default async function updateCoordinatorReviewItem(id, { answer }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReviewItem = await prisma.coordinatorReviewItem.update({
      where: {
        id,
      },
      data: {
        answer,
      },
    });

    return coordinatorReviewItem;
  } catch (error) {
    throw error;
  }
}
