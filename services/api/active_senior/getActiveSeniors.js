import { PrismaClient } from "@prisma/client";

export default async function getActiveSeniors({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const activeSeniors = await prisma.activeSenior.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    return activeSeniors;
  } catch (error) {
    throw error;
  }
}
