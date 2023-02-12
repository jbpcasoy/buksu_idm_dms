const { PrismaClient } = require("@prisma/client");

export default async function readIMs({ page, limit }) {
  const prisma = new PrismaClient();

  try {
    const ims = await prisma.iM.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    return ims;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
