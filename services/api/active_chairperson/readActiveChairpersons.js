import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveChairpersons({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeChairpersons = await prisma.activeChairperson.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return activeChairpersons;
  } catch (error) {
    throw error;
  }
}
