import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMReviewSections({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const iMReviewSections = await prisma.iMReviewSection.findMany({
    take: limit,
    skip: page ? (page - 1) * limit : undefined,
  });

  const total = await prisma.iMReviewSection.count();
  return { data: iMReviewSections, total };
}
