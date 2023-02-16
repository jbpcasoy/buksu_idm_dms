import { PrismaClient } from "@prisma/client";

export default async function readChairperson(id) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await prisma.chairperson.findUnique({
      where: {
        id,
      },
    });

    return chairperson;
  } catch (error) {
    throw error;
  }
}
