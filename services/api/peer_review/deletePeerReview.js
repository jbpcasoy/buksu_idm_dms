import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerReview(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerReview = await prisma.peerReview.delete({
      where: {
        id,
      },
    });
    return peerReview;
  } catch (error) {
    throw error;
  }
}
