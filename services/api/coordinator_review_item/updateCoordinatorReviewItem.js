import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateCoordinatorReviewItem(id, data) {
  const prisma = PRISMA_CLIENT;

  const { answer } = data;

  const coordinatorReviewItem = await prisma.coordinatorReviewItem.update({
    where: {
      id,
    },
    data: {
      answer,
    },
  });

  return coordinatorReviewItem;
}
