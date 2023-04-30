import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonReview(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReview = await prisma.chairpersonReview.delete({
    where: {
      id,
    },
  });
  return chairpersonReview;
}
