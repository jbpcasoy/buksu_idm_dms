import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateCoordinatorReviewItem(id, { answer }) {
  const prisma = PRISMA_CLIENT;

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
