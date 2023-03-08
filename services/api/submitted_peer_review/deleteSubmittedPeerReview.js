import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedPeerReview(id) {
  const prisma = new PrismaClient();

  try {
    const submittedPeerReview = await prisma.submittedPeerReview.delete({
      where: {
        id,
      },
    });

    return submittedPeerReview;
  } catch (error) {
    throw error;
  }
}
