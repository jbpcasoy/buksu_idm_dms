import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCoordinatorReview(id) {
  const prisma = PRISMA_CLIENT;

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
}
