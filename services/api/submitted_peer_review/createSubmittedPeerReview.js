import { PrismaClient } from "@prisma/client";
import readPeerReview from "../peer_review/readPeerReview";

export default async function createSubmittedPeerReview({ peerReviewId }) {
  const prisma = new PrismaClient();

  try {
    const peerReview = await readPeerReview(peerReviewId);

    const submittedPeerReview = await prisma.submittedPeerReview.create({
      data: {
        PeerReview: {
          connect: {
            id: peerReview.id,
          },
        },
        IM: {
          connect: {
            id: peerReview.iMId,
          },
        },
      },
    });
    return submittedPeerReview;
  } catch (error) {
    throw error;
  }
}
