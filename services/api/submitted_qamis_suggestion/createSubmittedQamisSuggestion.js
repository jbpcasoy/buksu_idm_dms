import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import checkAndUpdateStatus from "@/services/helpers/checkAndUpdateStatus";
import updateIM from "../im/updateIM";
import readQamisSuggestion from "../qamis_suggestion/readQamisSuggestion";

export default async function createSubmittedQamisSuggestion({
  qamisSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestion = await readQamisSuggestion({
    id: qamisSuggestionId,
    ability,
  });

  const submittedQamisSuggestion = await prisma.submittedQamisSuggestion.create({
    data: {
      QamisSuggestion: {
        connect: {
          id: qamisSuggestion.id,
        },
      },
      Notification: {
        create: {
          Type: "SUBMITTED_QAMIS_SUGGESTION",
        },
      },
      IM: {
        connect: {
          id: qamisSuggestion.iMId
        }
      },
      IMEvent: {
        create: {
          IM: {
            connect: {
              id: qamisSuggestion.iMId,
            },
          },
          IMEventType: "SUBMITTED_QAMIS_SUGGESTION",
        },
      },
    },
  });

  await checkAndUpdateStatus({ iMId: qamisSuggestion.iMId, ability });

  await updateIM(
    qamisSuggestion.iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );

  return submittedQamisSuggestion;
}
