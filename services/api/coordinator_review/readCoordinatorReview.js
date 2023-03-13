import { PrismaClient } from "@prisma/client";

export default async function readCoordinatorReview(id) {
  const prisma = new PrismaClient();
  try {
    const coordinatorReview = await prisma.coordinatorReview.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        IM: true,
        Coordinator: {
          select: {
            Faculty: {
              include: {
                user: true,
              },
            },
          },
        },
      },
    });

    return coordinatorReview;
  } catch (error) {
    throw error;
  }
}
