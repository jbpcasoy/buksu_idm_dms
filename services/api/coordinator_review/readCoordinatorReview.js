import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReview(id) {
  const prisma = new PrismaClient();
  try {
    const coordinatorReview = await prisma.coordinatorReview.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return coordinatorReview;
  } catch (error) {
    throw error;
  }
}
