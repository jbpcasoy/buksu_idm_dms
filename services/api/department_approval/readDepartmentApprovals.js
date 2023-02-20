import { PrismaClient } from "@prisma/client";

export default async function readDepartmentApprovals({ limit, page }) {
  const prisma = new PrismaClient();

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
