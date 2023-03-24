import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedCoordinatorReview(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedCoordinatorReview =
      await prisma.submittedCoordinatorReview.delete({
        where: {
          id,
        },
      });
    return submittedCoordinatorReview;
  } catch (error) {
    throw error;
  }
}
