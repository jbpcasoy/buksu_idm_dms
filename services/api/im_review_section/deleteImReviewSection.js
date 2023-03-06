import { PrismaClient } from "@prisma/client";

export default async function deleteImReviewSection(id) {
  const prisma = new PrismaClient();

  try {
    const iMReviewSection = await prisma.iMReviewSection.delete({
      where: {
        id: id,
      },
    });
    return iMReviewSection;
  } catch (error) {
    throw error;
  }
}
