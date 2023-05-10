import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readCoordinatorReview from "../coordinator_review/readCoordinatorReview";
import updateIM from "../im/updateIM";

export default async function createSubmittedCoordinatorReview({
  coordinatorReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const coordinatorReview = await readCoordinatorReview({
    id: coordinatorReviewId,
    ability,
  });

  const submittedCoordinatorReview =
    await prisma.submittedCoordinatorReview.create({
      data: {
        coordinatorReviewId,
        iMId: coordinatorReview.iMId,
        Notification: {
          create: {
            Type: "SUBMITTED_COORDINATOR_REVIEW",
          },
        },
        IMEvent: {
          create: {
            IM: {
              connect: {
                id: coordinatorReview.iMId,
              },
            },
            IMEventType: "SUBMITTED_COORDINATOR_REVIEW",
          },
        },
      },
    });

  await updateIM(
    coordinatorReview.iMId,
    {
      updatedAt: new Date(),
    },
    ability
  );

  return submittedCoordinatorReview;
}
