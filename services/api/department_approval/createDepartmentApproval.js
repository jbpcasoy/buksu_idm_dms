import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createDepartmentApproval({ iMId }) {
  const prisma = PRISMA_CLIENT;

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
