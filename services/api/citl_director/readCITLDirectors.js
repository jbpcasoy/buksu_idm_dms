import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readCITLDirectors({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const cITLDirectors = await prisma.cITLDirector.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.cITLDirector.count();
    return { data: cITLDirectors, total };
  } catch (error) {
    throw error;
  }
}
