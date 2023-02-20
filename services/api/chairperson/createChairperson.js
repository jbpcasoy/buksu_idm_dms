import { PrismaClient } from "@prisma/client";

export default async function createChairperson({ facultyId }) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await prisma.chairperson.create({
      data: {
        facultyId,
      },
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
