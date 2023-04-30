import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteImReviewSection(id) {
  const prisma = PRISMA_CLIENT;

  const iMReviewSection = await prisma.iMReviewSection.delete({
    where: {
      id: id,
    },
  });
  return iMReviewSection;
}
