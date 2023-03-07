import { PrismaClient } from "@prisma/client";

export default async function deletePeerReviewItem(id) {
  const prisma = new PrismaClient();

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
