const { PrismaClient } = require("@prisma/client");

export default async function readIM(id) {
  const prisma = new PrismaClient();

  try {
    const ims = await prisma.iM.findUnique({
      where: {
        id,
      },
      include: {
        owner: true,
      },
    });

    return ims;
  } catch (error) {
    throw error;
  }
}
