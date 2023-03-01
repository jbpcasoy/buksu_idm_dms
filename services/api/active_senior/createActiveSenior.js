import { PrismaClient } from "@prisma/client";

export default async function createActiveSenior({ seniorId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const senior = await findSenior({ seniorId, departmentId });

    const activeFaculty = await findActiveFaculty({ seniorId });

    const activeSenior = await prisma.activeSenior.create({
      data: {
        seniorId: senior.id,
        departmentId,
        activeFacultyId: activeFaculty.id,
      },
    });

    return activeSenior;
  } catch (error) {
    throw error;
  }
}

async function findSenior({ seniorId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const senior = await prisma.senior.findFirstOrThrow({
      where: {
        Faculty: {
          departmentId: departmentId,
        },
        id: seniorId,
      },
    });

    return senior;
  } catch (error) {
    throw error;
  }
}

async function findActiveFaculty({ seniorId }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculty = await prisma.activeFaculty.findFirstOrThrow({
      where: {
        Faculty: {
          Senior: {
            id: seniorId,
          },
        },
      },
    });

    return activeFaculty;
  } catch (error) {
    throw error;
  }
}
