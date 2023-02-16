import { PrismaClient } from "@prisma/client";

export default async function createActiveSenior({ departmentId, seniorId }) {
  const prisma = new PrismaClient();

  try {
    const activeSenior = await prisma.activeSenior.create({
      data: {
        departmentId,
        seniorId,
      },
    });

    return activeSenior;
  } catch (error) {
    throw error;
  }
}
