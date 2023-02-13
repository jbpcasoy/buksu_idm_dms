const { PrismaClient } = require("@prisma/client");

export default async function deleteIm(id) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.delete({
      where: {
        id,
      },
    });
    return im;
  } catch (error) {
    throw error;
  }
}
