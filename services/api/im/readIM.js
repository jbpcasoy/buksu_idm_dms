const { PrismaClient } = require("@prisma/client");

export default async function readIM(id) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.findUnique({
      where: {
        id,
      },
      include: {
        owner: true,
      },
    });

    return im;
  } catch (error) {
    throw error;
  }
}
