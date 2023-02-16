import { PrismaClient } from "@prisma/client";

export default async function readDepartmentApproval(id) {
  const prisma = new PrismaClient();

  try {
    const departmentApproval = await prisma.departmentApproval.findUnique({
      where: {
        id,
      },
    });

    return departmentApproval;
  } catch (error) {
    throw error;
  }
}
