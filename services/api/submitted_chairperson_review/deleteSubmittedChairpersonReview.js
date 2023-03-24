import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedChairpersonReview(id) {
  const prisma = PRISMA_CLIENT;

  const submittedChairpersonReview =
    await prisma.submittedChairpersonReview.delete({
      where: {
        id,
      },
    });
  return submittedChairpersonReview;
}
