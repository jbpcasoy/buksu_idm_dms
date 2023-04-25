import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import updateIM from "../im/updateIM";
import readIMDCoordinatorSuggestion from "../imd_coordinator_suggestion/readIMDCoordinatorSuggestion";

export default async function createSubmittedIMDCoordinatorSuggestion({
  iMDCoordinatorSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestion = await readIMDCoordinatorSuggestion({
    id: iMDCoordinatorSuggestionId,
    ability,
  });
  const submittedIMDCoordinatorSuggestion =
    await prisma.submittedIMDCoordinatorSuggestion.create({
      data: {
        iMDCoordinatorSuggestionId: iMDCoordinatorSuggestion.id,
        Notification: {
          create: {
            Type: "SUBMITTED_IMD_COORDINATOR_SUGGESTION",
          },
        },
        IMEvent: {
          create: {
            IMEventType: "SUBMITTED_IMD_COORDINATOR_SUGGESTION",
          },
        },
      },
    });

  await updateIM(iMDCoordinatorSuggestion.iMId, {
    status: "CITL_REVIEWED",
  });

  return submittedIMDCoordinatorSuggestion;
}
