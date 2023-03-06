import { PrismaClient } from "@prisma/client";

export default async function updateImReviewSection(id, { title }) {
  const prisma = new PrismaClient();

  try {
    const imReviewSection = await prisma.iMReviewSection.update({
      where: {
        id: id,
      },
      data: {
        title: title,
      },
    });

    return imReviewSection;
  } catch (error) {
    throw error;
  }
}
