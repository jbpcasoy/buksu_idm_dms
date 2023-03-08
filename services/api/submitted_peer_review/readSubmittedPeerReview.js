import { PrismaClient } from "@prisma/client";

export default async function readSubmittedPeerReview(id) {
  const prisma = new PrismaClient();

  try {
    const submittedPeerReview =
      await prisma.submittedPeerReview.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return submittedPeerReview;
  } catch (error) {
    throw error;
  }
}
