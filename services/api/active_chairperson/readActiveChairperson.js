import { PrismaClient } from "@prisma/client";

export default async function readActiveChairperson(id) {
  const prisma = new PrismaClient();

  try {
    const activeChairperson = await prisma.activeChairperson.findUnique({
      where: {
        id,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
