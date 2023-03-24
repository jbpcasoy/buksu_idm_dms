import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createDepartment({ name, collegeId }) {
  const prisma = PRISMA_CLIENT;

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
