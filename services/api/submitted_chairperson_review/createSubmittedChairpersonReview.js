import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import readChairpersonReview from "../chairperson_review/readChairpersonReview";
import getServerUser from "@/services/helpers/getServerUser";
import userAbility from "@/services/abilities/defineAbility";

export default async function createSubmittedChairpersonReview({
  chairpersonReviewId,
}) {
  const prisma = PRISMA_CLIENT;
  const user = await getServerUser(req, res);

  const chairpersonReview = await readChairpersonReview({
    id: chairpersonReviewId,
    ability: await userAbility(user),
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
            IMEventType: "SUBMITTED_CHAIRPERSON_REVIEW",
          },
        },
      },
    });

  return submittedChairpersonReview;
}
