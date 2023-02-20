import { PrismaClient } from "@prisma/client";

export default async function deleteDepartmentApproval(id) {
  const prisma = new PrismaClient();

  try {
    const departmentApproval = await prisma.departmentApproval.delete({
      where: {
        id,
      },
    });

    return departmentApproval;
  } catch (error) {
    throw error;
  }
}
