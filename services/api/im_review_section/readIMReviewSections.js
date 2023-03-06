import { PrismaClient } from "@prisma/client";

export default async function readIMReviewSections({ limit, page }) {
  const prisma = new PrismaClient();

  const iMReviewSections = await prisma.iMReviewSection.findMany({
    take: limit,
    skip: page ? (page - 1) * limit : undefined,
  });

  const total = await prisma.iMReviewSection.count();
  return { data: iMReviewSections, total };
}
