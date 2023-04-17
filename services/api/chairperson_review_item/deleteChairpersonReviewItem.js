import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviewItem = await prisma.chairpersonReviewItem.delete({
    where: {
      id,
    },
  });
  return chairpersonReviewItem;
}
