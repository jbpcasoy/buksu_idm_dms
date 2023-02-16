import { PrismaClient } from "@prisma/client";

export default async function createDepartmentApproval({ iMId }) {
  const prisma = new PrismaClient();

  try {
    const departmentApproval = await prisma.departmentApproval.create({
      data: {
        iMId,
      },
    });
    return departmentApproval;
  } catch (error) {
    throw error;
  }
}
