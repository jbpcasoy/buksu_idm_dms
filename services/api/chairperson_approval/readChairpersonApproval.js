import { PrismaClient } from "@prisma/client";

export default async function readChairpersonApproval(id) {
  const prisma = new PrismaClient();

  try {
    const chairpersonApproval =
      await prisma.chairpersonApproval.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return chairpersonApproval;
  } catch (error) {
    throw error;
  }
}
