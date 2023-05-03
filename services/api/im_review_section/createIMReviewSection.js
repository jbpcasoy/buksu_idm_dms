import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createIMReviewSection({ title }) {
  const prisma = PRISMA_CLIENT;

  const iMReviewSection = await prisma.iMReviewSection.create({
    data: {
      title,
    },
  });

  return iMReviewSection;
}
