const { PrismaClient } = require("@prisma/client");

export default async function updateIM(id, { serialNumber, title, status }) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.update({
      where: {
        id,
      },
      data: {
        serialNumber,
        title,
        status,
      },
    });
    return im;
  } catch (error) {
    throw error;
  }
}
