import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const coordinatorReviewItem =
      await prisma.coordinatorReviewItem.findUniqueOrThrow({
        where: {
          id,
        },
      });

    return coordinatorReviewItem;
  } catch (error) {
    throw error;
  }
}
