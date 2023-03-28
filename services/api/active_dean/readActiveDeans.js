import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveDeans({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeDeans = await prisma.activeDean.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.activeDean.count();

    return { data: activeDeans, total };
  } catch (error) {
    throw error;
  }
}
