import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonApprovals({ limit, page }) {
  const prisma = PRISMA_CLIENT;

  const chairpersonApprovals = await prisma.chairpersonApproval.findMany({
    take: limit,
    skip: (page - 1) * limit,
  });

  return chairpersonApprovals;
}
