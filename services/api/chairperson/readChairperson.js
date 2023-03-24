import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readChairperson(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const chairperson = await prisma.chairperson.findUniqueOrThrow({
      where: {
        id,
      },
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
