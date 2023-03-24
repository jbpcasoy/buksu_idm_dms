import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCoordinatorReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorReviewItem = await prisma.coordinatorReviewItem.delete({
      where: {
        id,
      },
    });

    return coordinatorReviewItem;
  } catch (error) {
    throw error;
  }
}
