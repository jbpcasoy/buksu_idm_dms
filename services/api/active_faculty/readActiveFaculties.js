import { PrismaClient } from "@prisma/client";

export default async function readActiveFaculties({ page, limit }) {
  const prisma = new PrismaClient();

  try {
    const activeFaculties = prisma.activeFaculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return activeFaculties;
  } catch (error) {
    throw error;
  }
}
