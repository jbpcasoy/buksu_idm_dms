import { PrismaClient } from "@prisma/client";

export default async function createCoordinatorReview({ iMId, coordinatorId }) {
  const prisma = new PrismaClient();

  try {
    const coordinatorReview = await prisma.coordinatorReview.create({
      data: {
        IM: {
          connect: {
            id: iMId,
          },
        },
        Coordinator: {
          connect: {
            id: coordinatorId,
          },
        },
      },
    });

    return coordinatorReview;
  } catch (error) {
    throw error;
  }
}
