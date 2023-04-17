import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedPeerReview(id) {
  const prisma = PRISMA_CLIENT;

  const submittedPeerReview =
    await prisma.submittedPeerReview.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return submittedPeerReview;
}
