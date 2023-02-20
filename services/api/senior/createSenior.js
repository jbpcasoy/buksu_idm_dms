import { PrismaClient } from "@prisma/client";

export default async function createSenior({ facultyId }) {
  const prisma = new PrismaClient();

  try {
    const senior = await prisma.senior.create({
      data: {
        facultyId,
      },
    });
    return senior;
  } catch (error) {
    throw error;
  }
}
