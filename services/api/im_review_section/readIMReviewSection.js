import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function readIMReviewSection(id) {
  const prisma = PRISMA_CLIENT;

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
