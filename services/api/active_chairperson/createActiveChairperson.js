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

    const activeFaculty = await findActiveFaculty({ chairpersonId });

    const activeChairperson = await prisma.activeChairperson.create({
      data: {
        chairpersonId: chairperson.id,
        departmentId,
        activeFacultyId: activeFaculty.id,
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

async function findActiveFaculty({ chairpersonId }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.findFirstOrThrow({
      where: {
        Faculty: {
          Chairperson: {
            id: chairpersonId,
          },
        },
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
