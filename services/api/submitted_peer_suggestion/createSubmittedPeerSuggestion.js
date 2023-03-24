import { PrismaClient } from "@prisma/client";
import readPeerSuggestion from "../peer_suggestion/readPeerSuggestion";

export default async function createSubmittedPeerSuggestion({
  peerSuggestionId,
}) {
  try {
    const prisma = new PrismaClient();

    const peerSuggestion = await readPeerSuggestion(peerSuggestionId);

    const submittedPeerSuggestion = await prisma.submittedPeerSuggestion.create(
      {
        data: {
          PeerSuggestion: {
            connect: {
              id: peerSuggestion.id,
            },
          },
          IM: {
            connect: {
              id: peerSuggestion.SubmittedPeerReview.iMId,
            },
          },
          Notification: {
            create: {
              Type: "SUBMITTED_PEER_SUGGESTION",
            },
          },
        },
      }
    );

    return submittedPeerSuggestion;
  } catch (error) {
    throw error;
  }
}
