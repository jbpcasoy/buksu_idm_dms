import { PrismaClient } from "@prisma/client";

export default async function readDepartments({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const departments = prisma.department.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return departments;
  } catch (error) {
    throw error;
  }
}
