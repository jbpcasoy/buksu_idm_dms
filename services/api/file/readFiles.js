const { PrismaClient } = require("@prisma/client");

export default async function readFiles({
  page,
  limit,
  fileName,
  originalFileName,
  iMSerialNumber,
}) {
  const prisma = new PrismaClient();

  try {
    const files = await prisma.file.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        iM: true,
        ActiveFile: true,
      },
      where: {
        fileName: {
          contains: fileName,
        },
        originalFileName: {
          contains: originalFileName,
        },
        iM: {
          serialNumber: {
            contains: iMSerialNumber,
          },
        },
      },
    });

    const total = await prisma.file.count({
      where: {
        fileName: {
          contains: fileName,
        },
        originalFileName: {
          contains: originalFileName,
        },
        iM: {
          serialNumber: {
            contains: iMSerialNumber,
          },
        },
      },
    });

    return { data: files, total };
  } catch (error) {
    throw error;
  }
}
