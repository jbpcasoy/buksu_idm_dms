import { PrismaClient } from "@prisma/client";

export default async function getActiveSenior(id) {
  const prisma = new PrismaClient();

  try {
    const activeSenior = await prisma.activeSenior.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return activeSenior;
  } catch (error) {
    throw error;
  }
}
