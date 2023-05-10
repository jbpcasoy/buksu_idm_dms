import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import checkAndUpdateStatus from "@/services/helpers/checkAndUpdateStatus";
import readCoordinatorSuggestion from "../coordinator_suggestion/readCoordinatorSuggestion";
import updateIM from "../im/updateIM";
import readSubmittedCoordinatorReview from "../submitted_coordinator_review/readSubmittedCoordinatorReview";

export default async function createSubmittedCoordinatorSuggestion({
  coordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestion = await readCoordinatorSuggestion({
    id: coordinatorSuggestionId,
    ability,
  });

  const submittedCoordinatorSuggestion =
    await prisma.submittedCoordinatorSuggestion.create({
      data: {
        CoordinatorSuggestion: {
          connect: {
            id: coordinatorSuggestion.id,
          },
        },
        IM: {
          connect: {
            id: coordinatorSuggestion.SubmittedCoordinatorReview.iMId,
          },
        },
        Notification: {
          create: {
            Type: "SUBMITTED_COORDINATOR_SUGGESTION",
          },
        },
        IMEvent: {
          create: {
            IM: {
              connect: {
                id: coordinatorSuggestion.SubmittedCoordinatorReview.iMId,
              },
            },
            IMEventType: "SUBMITTED_COORDINATOR_SUGGESTION",
          },
        },
      },
    });

  const submittedCoordinatorReview = await readSubmittedCoordinatorReview({
    id: coordinatorSuggestion.submittedCoordinatorReviewId,
    ability,
  });
  await checkAndUpdateStatus({
    iMId: submittedCoordinatorReview.iMId,
    ability,
  });

  await updateIM(
    submittedCoordinatorReview.iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );
  return submittedCoordinatorSuggestion;
}
