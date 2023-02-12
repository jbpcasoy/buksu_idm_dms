const { PrismaClient } = require("@prisma/client");

export default async function createIM({
  fileName,
  serialNumber,
  title,
  ownerId,
}) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.create({
      data: {
        serialNumber,
        title,
        status: "SUBMITTED",
        owner: {
          connect: {
            id: ownerId,
          },
        },
        fileName,
      },
    });
    return im;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
