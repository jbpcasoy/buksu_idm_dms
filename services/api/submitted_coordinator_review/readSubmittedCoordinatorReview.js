import { PrismaClient } from "@prisma/client";

export default async function readSubmittedCoordinatorReview(id) {
  const prisma = new PrismaClient();

  try {
    const submittedCoordinatorReview =
      await prisma.submittedCoordinatorReview.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return submittedCoordinatorReview;
  } catch (error) {
    throw error;
  }
}
