import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveCITLDirectors({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeCITLDirectors = await prisma.activeCITLDirector.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.activeCITLDirector.count();
    return { data: activeCITLDirectors, total };
  } catch (error) {
    throw error;
  }
}
