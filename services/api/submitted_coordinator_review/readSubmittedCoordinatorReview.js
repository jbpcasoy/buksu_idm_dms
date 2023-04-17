import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedCoordinatorReview(id) {
  const prisma = PRISMA_CLIENT;

  const submittedCoordinatorReview =
    await prisma.submittedCoordinatorReview.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return submittedCoordinatorReview;
}
