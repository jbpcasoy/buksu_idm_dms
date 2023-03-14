import { PrismaClient } from "@prisma/client";

export default async function createPeerSuggestion({ submittedPeerReviewId }) {
  const prisma = new PrismaClient();

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
