import { PrismaClient } from "@prisma/client";

export default async function readDepartment(id) {
  const prisma = new PrismaClient();

  try {
    const department = await prisma.department.findUnique({
      where: {
        id,
      },
    });

    return department;
  } catch (error) {
    throw error;
  }
}
