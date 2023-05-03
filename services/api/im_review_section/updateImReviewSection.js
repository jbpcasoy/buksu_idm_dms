import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updateImReviewSection(id, { title }) {
  const prisma = PRISMA_CLIENT;

  const imReviewSection = await prisma.iMReviewSection.update({
    where: {
      id: id,
    },
    data: {
      title: title,
    },
  });

  return imReviewSection;
}
