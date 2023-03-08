const { PrismaClient } = require("@prisma/client");

export default async function createIM({
  serialNumber,
  title,
  ownerId,
  authors,
  type,
}) {
  const prisma = new PrismaClient();

  try {
    const im = await prisma.iM.create({
      data: {
        serialNumber,
        title,
        status: "SUBMITTED",
        authors,
        owner: {
          connect: {
            id: ownerId,
          },
        },
        type,
      },
    });
    return im;
  } catch (error) {
    throw error;
  }
}
