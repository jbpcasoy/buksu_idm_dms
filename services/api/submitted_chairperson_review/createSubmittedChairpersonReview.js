import { PrismaClient } from "@prisma/client";
import readChairpersonReview from "../chairperson_review/readChairpersonReview";

export default async function createSubmittedChairpersonReview({
  chairpersonReviewId,
}) {
  const prisma = new PrismaClient();

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
        },
      });

    return submittedChairpersonReview;
  } catch (error) {
    throw error;
  }
}
