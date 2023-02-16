import { PrismaClient } from "@prisma/client";

export default async function deleteChairperson(id) {
  const prisma = new PrismaClient();

  try {
    const chairperson = await prisma.chairperson.delete({
      where: {
        id,
      },
    });
    return chairperson;
  } catch (error) {
    throw error;
  }
}
