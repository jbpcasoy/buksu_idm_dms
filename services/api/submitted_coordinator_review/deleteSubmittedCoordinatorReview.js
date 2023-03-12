import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedCoordinatorReview(id) {
  const prisma = new PrismaClient();

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
