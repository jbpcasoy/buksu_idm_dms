import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteImReviewSection(id) {
  const prisma = PRISMA_CLIENT;

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
