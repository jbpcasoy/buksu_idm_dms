import { PrismaClient } from "@prisma/client";

export default async function createActiveSenior({ seniorId, departmentId }) {
  const prisma = new PrismaClient();

  try {
    const senior = await findSenior({ seniorId, departmentId });
    const activeSenior = await prisma.activeSenior.create({
      data: {
        seniorId: senior.id,
        departmentId,
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
