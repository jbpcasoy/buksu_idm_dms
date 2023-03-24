import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerReview(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerReview = await prisma.peerReview.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        IM: true,
        Faculty: {
          include: {
            user: true,
          },
        },
        PeerReviewItem: true,
      },
    });
    return peerReview;
  } catch (error) {
    throw error;
  }
}
