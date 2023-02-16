import { PrismaClient } from "@prisma/client";

export default async function readFaculties({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const faculties = prisma.faculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return faculties;
  } catch (error) {
    throw error;
  }
}
