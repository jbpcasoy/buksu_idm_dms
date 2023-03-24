import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteDepartment(id) {
  const prisma = PRISMA_CLIENT;

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
