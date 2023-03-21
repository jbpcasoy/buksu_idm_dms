const { PrismaClient } = require("@prisma/client");

export default async function updateIM(
  id,
  { serialNumber, title, status, type }
) {
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
        type,
      },
    });
    return im;
  } catch (error) {
    throw error;
  }
}
