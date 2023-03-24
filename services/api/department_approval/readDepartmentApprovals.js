import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDepartmentApprovals({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  try {
    const departmentApprovals = await prisma.departmentApproval.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return departmentApprovals;
  } catch (error) {
    throw error;
  }
}
