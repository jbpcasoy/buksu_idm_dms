import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerReviewItem = await prisma.peerReviewItem.delete({
      where: {
        id,
      },
    });
    return peerReviewItem;
  } catch (error) {
    throw error;
  }
}
