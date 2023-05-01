import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readChairpersonReview from "../chairperson_review/readChairpersonReview";

export default async function createSubmittedChairpersonReview({
  chairpersonReviewId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReview = await readChairpersonReview({
    id: chairpersonReviewId,
    ability,
  });

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
            IM: {
              connect: {
                id: chairpersonReview.iMId,
              },
            },
            IMEventType: "SUBMITTED_CHAIRPERSON_REVIEW",
          },
        },
      },
    });

  return submittedChairpersonReview;
}
