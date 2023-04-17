import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

const { PrismaClient } = require("@prisma/client");

export default async function readFiles({
  page,
  limit,
  fileName,
  originalFileName,
  iMSerialNumber,
  active,
  iMId,
  sortColumn,
  sortOrder,
}) {
  const prisma = PRISMA_CLIENT;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

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
        id: {
          contains: iMId,
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

    orderBy: sortFilter,
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
        id: {
          contains: iMId,
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
}
