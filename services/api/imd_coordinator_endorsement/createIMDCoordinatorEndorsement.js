import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readIM from "../im/readIM";
import readIMDCoordinator from "../imd_coordinator/readIMDCoordinator";
import readSubmittedIMDCoordinatorSuggestion from "../submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";

export default async function createIMDCoordinatorEndorsement({
  iMId,
  iMDCoordinatorId,
  submittedIMDCoordinatorSuggestionId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iM = await readIM(iMId);
    const iMDCoordinator = await readIMDCoordinator(iMDCoordinatorId);
    const submittedIMDCoordinatorSuggestion =
      await readSubmittedIMDCoordinatorSuggestion(
        submittedIMDCoordinatorSuggestionId
      );

    const iMDCoordinatorEndorsement =
      await prisma.iMDCoordinatorEndorsement.create({
        data: {
          IM: {
            connect: {
              id: iM.id,
            },
          },
          IMDCoordinator: {
            connect: {
              id: iMDCoordinator.id,
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
