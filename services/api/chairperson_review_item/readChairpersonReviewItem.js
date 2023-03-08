import { PrismaClient } from "@prisma/client";

export default async function readChairpersonReviewItem(id) {
  const prisma = new PrismaClient();

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
