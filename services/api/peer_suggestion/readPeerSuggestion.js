import { PrismaClient } from "@prisma/client";

export default async function readPeerSuggestion(id) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestion = await prisma.peerSuggestion.findUniqueOrThrow({
      where: {
        id,
      },
      include: {
        SubmittedPeerReview: true,
      },
    });
    return peerSuggestion;
  } catch (error) {
    throw error;
  }
}
