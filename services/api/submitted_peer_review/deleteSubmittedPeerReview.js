import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedPeerReview(id) {
  const prisma = PRISMA_CLIENT;

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
