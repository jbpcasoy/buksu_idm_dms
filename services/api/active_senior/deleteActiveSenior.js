import { PrismaClient } from "@prisma/client";

export default async function deleteActiveSenior(id) {
  const prisma = new PrismaClient();

  try {
    const activeSenior = await prisma.activeSenior.delete({
      where: {
        id,
      },
    });
    return activeSenior;
  } catch (error) {
    throw error;
  }
}
