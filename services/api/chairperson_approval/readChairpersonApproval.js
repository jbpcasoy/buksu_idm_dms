import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairpersonApproval(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonApproval =
    await prisma.chairpersonApproval.findUniqueOrThrow({
      where: {
        id,
      },
    });
  return chairpersonApproval;
}
