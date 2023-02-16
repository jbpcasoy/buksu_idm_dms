import { PrismaClient } from "@prisma/client";

export default async function readChairpersons({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const chairpersons = await prisma.chairperson.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return chairpersons;
  } catch (error) {
    throw error;
  }
}
