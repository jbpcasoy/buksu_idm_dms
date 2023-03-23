import { PrismaClient } from "@prisma/client";
import readCoordinatorSuggestion from "../coordinator_suggestion/readCoordinatorSuggestion";

export default async function createSubmittedCoordinatorSuggestion({
  coordinatorSuggestionId,
}) {
  try {
    const prisma = new PrismaClient();

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
        },
      });
    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
