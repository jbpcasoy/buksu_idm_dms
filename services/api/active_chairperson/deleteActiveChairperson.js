import { PrismaClient } from "@prisma/client";

export default async function deleteActiveChairperson(id) {
  const prisma = new PrismaClient();

  try {
    const activeChairperson = await prisma.activeChairperson.delete({
      where: {
        id,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
