import { PrismaClient } from "@prisma/client";

export default async function readActiveChairpersons({ limit, page }) {
  const prisma = new PrismaClient();

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
