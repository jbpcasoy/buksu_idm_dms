import { PrismaClient } from "@prisma/client";

export default async function deleteCoordinatorReviewItem(id) {
  const prisma = new PrismaClient();

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
