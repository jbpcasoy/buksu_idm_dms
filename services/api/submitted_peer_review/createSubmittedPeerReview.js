import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readPeerReview from "../peer_review/readPeerReview";

export default async function createSubmittedPeerReview({ peerReviewId }) {
  const prisma = PRISMA_CLIENT;

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
        Notification: {
          create: {
            Type: "SUBMITTED_PEER_REVIEW",
          },
        },
      },
    });
    return submittedPeerReview;
  } catch (error) {
    throw error;
  }
}
