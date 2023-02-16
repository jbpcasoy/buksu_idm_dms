import { PrismaClient } from "@prisma/client";

export default async function createActiveChairperson({
  departmentId,
  chairpersonId,
}) {
  const prisma = new PrismaClient();

  try {
    const activeChairperson = await prisma.activeChairperson.create({
      data: {
        departmentId,
        chairpersonId,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
