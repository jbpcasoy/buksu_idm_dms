import { PrismaClient } from "@prisma/client";

export default async function readSeniors({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const seniors = await prisma.senior.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    return seniors;
  } catch (error) {
    throw error;
  }
}
