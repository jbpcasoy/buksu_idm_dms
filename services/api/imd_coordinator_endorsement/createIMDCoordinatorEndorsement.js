import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readSubmittedIMDCoordinatorSuggestion from "../submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";

export default async function createIMDCoordinatorEndorsement({
  iMDCoordinatorId,
  submittedIMDCoordinatorSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const submittedIMDCoordinatorSuggestion =
      await readSubmittedIMDCoordinatorSuggestion(
        submittedIMDCoordinatorSuggestionId
      );

    const iMDCoordinatorEndorsement =
      await prisma.iMDCoordinatorEndorsement.create({
        data: {
          IM: {
            connect: {
              id: submittedIMDCoordinatorSuggestion.IMDCoordinatorSuggestion
                .iMId,
            },
          },
          IMDCoordinator: {
            connect: {
              id: iMDCoordinatorId,
            },
          },
          SubmittedIMDCoordinatorSuggestion: {
            connect: {
              id: submittedIMDCoordinatorSuggestion.id,
            },
          },
        },
      });

    return iMDCoordinatorEndorsement;
  } catch (error) {
    throw error;
  }
}
