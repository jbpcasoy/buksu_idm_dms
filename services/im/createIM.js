const { PrismaClient } = require("@prisma/client");

export default async function createIM({
  fileName,
  serialNumber,
  title,
  ownerId,
}) {
  const prisma = new PrismaClient();

  const im = await prisma.im.create({
    data: {
      serialNumber: serialNumber,
      title: title,
      status: "SUBMITTED",
      owner: {
        connect: {
          id: ownerId,
        },
      },
      fileName: fileName,
    },
  });

  await prisma.disconnect();

  return im;
}
