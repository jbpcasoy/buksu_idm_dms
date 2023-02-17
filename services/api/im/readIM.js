const { PrismaClient } = require("@prisma/client");

export default async function readIM(id) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.findUniqueOrThrow({
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
