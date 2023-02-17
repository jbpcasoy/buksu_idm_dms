import { PrismaClient } from "@prisma/client";

export default async function deleteSeniorApproval(id) {
  const prisma = new PrismaClient();

  try {
    const seniorApproval = await prisma.seniorApproval.delete({
      where: {
        id,
      },
    });

    return seniorApproval;
  } catch (error) {
    throw error;
  }
}
