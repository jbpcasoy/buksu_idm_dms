import { PrismaClient } from "@prisma/client";
import readCoordinatorReview from "../coordinator_review/readCoordinatorReview";

export default async function createSubmittedCoordinatorReview({
  coordinatorReviewId,
}) {
  const prisma = new PrismaClient();

  const coordinatorReview = await readCoordinatorReview(coordinatorReviewId);

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
      },
    });

  return submittedCoordinatorReview;
}
