import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonApproval(id) {
  const prisma = PRISMA_CLIENT;

  const chairpersonApproval = await prisma.chairpersonApproval.delete({
    where: {
      id,
    },
  });

  return chairpersonApproval;
}
