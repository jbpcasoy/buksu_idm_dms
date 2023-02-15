import { PrismaClient } from "@prisma/client";

export default async function deleteDepartment(id) {
  const prisma = new PrismaClient();

  try {
    const department = await prisma.department.delete({
      where: {
        id,
      },
    });

    return department;
  } catch (error) {
    throw error;
  }
}
