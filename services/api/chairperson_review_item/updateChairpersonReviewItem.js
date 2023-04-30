import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateChairpersonReviewItem(id, { answer }) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviewItem = await prisma.chairpersonReviewItem.update({
    where: {
      id,
    },
    data: { answer },
  });
  return chairpersonReviewItem;
}
