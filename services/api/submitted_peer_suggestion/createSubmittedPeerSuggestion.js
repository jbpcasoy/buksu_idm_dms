import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import checkAndUpdateStatus from "@/services/helpers/checkAndUpdateStatus";
import readPeerSuggestion from "../peer_suggestion/readPeerSuggestion";
import readSubmittedPeerReview from "../submitted_peer_review/readSubmittedPeerReview";

export default async function createSubmittedPeerSuggestion({
  peerSuggestionId,
}) {
  try {
    const prisma = PRISMA_CLIENT;

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
          IMEvent: {
            create: {
              IMEventType: "SUBMITTED_PEER_SUGGESTION",
            },
          },
        },
      }
    );

    const submittedPeerReview = await readSubmittedPeerReview(
      peerSuggestion.submittedPeerReviewId
    );
    await checkAndUpdateStatus(submittedPeerReview.iMId);

    return submittedPeerSuggestion;
  } catch (error) {
    throw error;
  }
}
