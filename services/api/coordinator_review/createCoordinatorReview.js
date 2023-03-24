import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCoordinatorReview({ iMId, coordinatorId }) {
  const prisma = PRISMA_CLIENT;

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
