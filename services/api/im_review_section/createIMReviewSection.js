import { PrismaClient } from "@prisma/client";

export default async function createIMReviewSection({ title }) {
  const prisma = new PrismaClient();

  try {
    const iMReviewSection = await prisma.iMReviewSection.create({
      data: {
        title,
      },
    });

    return iMReviewSection;
  } catch (error) {
    throw error;
  }
}
