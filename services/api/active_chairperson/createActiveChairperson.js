import { PrismaClient } from "@prisma/client";

export default async function createActiveChairperson({ chairpersonId }) {
  const prisma = new PrismaClient();

  try {
    const activeChairperson = await prisma.activeChairperson.create({
      data: {
        chairpersonId,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
