import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readSubmittedIMDCoordinatorSuggestion from "../submitted_imd_coordinator_suggestion/readSubmittedIMDCoordinatorSuggestion";

export default async function createIMDCoordinatorEndorsement({
  iMDCoordinatorId,
  submittedIMDCoordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const submittedIMDCoordinatorSuggestion =
    await readSubmittedIMDCoordinatorSuggestion({
      id: submittedIMDCoordinatorSuggestionId,
      ability,
    });

  const iMDCoordinatorEndorsement =
    await prisma.iMDCoordinatorEndorsement.create({
      data: {
        IM: {
          connect: {
            id: submittedIMDCoordinatorSuggestion.IMDCoordinatorSuggestion.iMId,
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
        Notification: {
          create: {
            Type: "IMD_COORDINATOR_ENDORSEMENT",
          },
        },
        IMEvent: {
          create: {
            IMEventType: "IMD_COORDINATOR_ENDORSEMENT",
          },
        },
      },
    });

  return iMDCoordinatorEndorsement;
}
