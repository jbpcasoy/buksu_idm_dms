const { PrismaClient } = require("@prisma/client");

export default async function readIMReviewSection(id) {
  const prisma = new PrismaClient();

  try {
    const imReviewSection = await prisma.iMReviewSection.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return imReviewSection;
  } catch (error) {
    throw error;
  }
}
