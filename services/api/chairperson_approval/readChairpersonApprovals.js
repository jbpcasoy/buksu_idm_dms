import { PrismaClient } from "@prisma/client";

export default async function readChairpersonApprovals({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersonApprovals = await prisma.chairpersonApproval.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return chairpersonApprovals;
  } catch (error) {
    throw error;
  }
}
