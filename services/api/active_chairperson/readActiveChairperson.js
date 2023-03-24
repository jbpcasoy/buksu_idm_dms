import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveChairperson(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const activeChairperson = await prisma.activeChairperson.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return activeChairperson;
  } catch (error) {
    throw error;
  }
}
