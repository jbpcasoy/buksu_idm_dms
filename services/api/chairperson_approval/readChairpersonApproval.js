import { PrismaClient } from "@prisma/client";

export default async function readChairpersonApproval(id) {
  const prisma = new PrismaClient();
  console.log({ id });

  try {
    const chairpersonApproval =
      await prisma.chairpersonApproval.findUniqueOrThrow({
        where: {
          id,
        },
      });
    console.log({ chairpersonApproval });
    return chairpersonApproval;
  } catch (error) {
    throw error;
  }
}
