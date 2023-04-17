import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonReviewItem =
    await prisma.chairpersonReviewItem.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return chairpersonReviewItem;
}
