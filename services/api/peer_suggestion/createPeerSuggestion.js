import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createPeerSuggestion({ submittedPeerReviewId }) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerSuggestion = await prisma.peerSuggestion.create({
      data: {
        SubmittedPeerReview: {
          connect: {
            id: submittedPeerReviewId,
          },
        },
      },
    });

    return peerSuggestion;
  } catch (error) {
    throw error;
  }
}
