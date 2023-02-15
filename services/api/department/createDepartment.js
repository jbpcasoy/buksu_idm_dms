import { PrismaClient } from "@prisma/client";

export default async function createDepartment({ name, collegeId }) {
  const prisma = new PrismaClient();

  try {
    const department = await prisma.department.create({
      data: {
        name,
        collegeId,
      },
    });

    return department;
  } catch (error) {
    throw error;
  }
}
