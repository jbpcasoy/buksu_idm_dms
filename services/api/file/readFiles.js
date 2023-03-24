import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function readFiles({
  page,
  limit,
  fileName,
  originalFileName,
  iMSerialNumber,
  active,
}) {
  const prisma = PRISMA_CLIENT;

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
        ActiveFile:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
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
        ActiveFile:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
      },
    });

    return { data: files, total };
  } catch (error) {
    throw error;
  }
}
