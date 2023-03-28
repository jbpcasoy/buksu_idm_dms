import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function createIM({
  serialNumber,
  title,
  ownerId,
  authors,
  type,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const im = await prisma.iM.create({
      data: {
        serialNumber,
        title,
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
