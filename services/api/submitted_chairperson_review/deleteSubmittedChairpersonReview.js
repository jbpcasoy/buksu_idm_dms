import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedChairpersonReview(id) {
  const prisma = new PrismaClient();

  const submittedChairpersonReview =
    await prisma.submittedChairpersonReview.delete({
      where: {
        id,
      },
    });
  return submittedChairpersonReview;
}
