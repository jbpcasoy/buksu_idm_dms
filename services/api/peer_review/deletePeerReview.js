import { PrismaClient } from "@prisma/client";

export default async function deletePeerReview(id) {
  const prisma = new PrismaClient();

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
