import { PrismaClient } from "@prisma/client";

export default async function readSeniorApprovals({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const seniorApprovals = await prisma.seniorApproval.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return seniorApprovals;
  } catch (error) {
    throw error;
  }
}
