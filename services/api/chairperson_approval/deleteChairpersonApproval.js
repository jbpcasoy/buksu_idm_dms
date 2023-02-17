import { PrismaClient } from "@prisma/client";

export default async function deleteChairpersonApproval(id) {
  const prisma = new PrismaClient();

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
