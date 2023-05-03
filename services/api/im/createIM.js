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
      IMEvent: {
        create: {
          IMEventType: "IM_CREATED",
        },
      },
    },
  });
  return im;
}
