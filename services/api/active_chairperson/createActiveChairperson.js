import { PrismaClient } from "@prisma/client";

export default async function createActiveChairperson({
  chairpersonId,
  departmentId,
}) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await findChairperson({
      chairpersonId,
      departmentId,
    });

    const activeChairperson = await prisma.activeChairperson.create({
      data: {
        chairpersonId: chairperson.id,
        departmentId,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}

async function findChairperson({ chairpersonId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await prisma.chairperson.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: departmentId,
        },
        id: chairpersonId,
      },
    });
    return chairperson;
  } catch (error) {
    throw error;
  }
}
