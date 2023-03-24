import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteChairpersonApproval(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairpersonApproval = await prisma.chairpersonApproval.delete({
      where: {
        id,
      },
    });

    return chairpersonApproval;
  } catch (error) {
    throw error;
  }
}
