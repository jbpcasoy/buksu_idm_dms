const { PrismaClient } = require("@prisma/client");

export default async function createIM({ serialNumber, title, ownerId }) {
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
      },
    });
    return im;
  } catch (error) {
    throw error;
  }
}
