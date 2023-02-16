import { PrismaClient } from "@prisma/client";

export default async function createActiveSenior({ seniorId }) {
  const prisma = new PrismaClient();

  try {
    const activeSenior = await prisma.activeSenior.create({
      data: {
        seniorId,
      },
    });

    return activeSenior;
  } catch (error) {
    throw error;
  }
}
