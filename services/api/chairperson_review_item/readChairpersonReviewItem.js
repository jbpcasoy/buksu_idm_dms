import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonReviewItem(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonReviewItem =
      await prisma.chairpersonReviewItem.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return chairpersonReviewItem;
  } catch (error) {
    throw error;
  }
}
