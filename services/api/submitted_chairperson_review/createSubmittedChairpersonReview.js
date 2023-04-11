import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readChairpersonReview from "../chairperson_review/readChairpersonReview";

export default async function createSubmittedChairpersonReview({
  chairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonReview = await readChairpersonReview(chairpersonReviewId);

    const submittedChairpersonReview =
      await prisma.submittedChairpersonReview.create({
        data: {
          chairpersonReviewId: chairpersonReview.id,
          iMId: chairpersonReview.iMId,
          Notification: {
            create: {
              Type: "SUBMITTED_CHAIRPERSON_REVIEW",
            },
          },
          IMEvent: {
            create: {
              IMEventType: "SUBMITTED_CHAIRPERSON_REVIEW",
            },
          },
        },
      });

    return submittedChairpersonReview;
  } catch (error) {
    throw error;
  }
}
