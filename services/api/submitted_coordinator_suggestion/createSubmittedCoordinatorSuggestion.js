import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinatorSuggestion from "../coordinator_suggestion/readCoordinatorSuggestion";

export default async function createSubmittedCoordinatorSuggestion({
  coordinatorSuggestionId,
}) {
  try {
    const prisma = PRISMA_CLIENT;

    const coordinatorSuggestion = await readCoordinatorSuggestion(
      coordinatorSuggestionId
    );

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
        },
      });
    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
