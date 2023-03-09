import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReviewItem(id) {
  const prisma = new PrismaClient();

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
