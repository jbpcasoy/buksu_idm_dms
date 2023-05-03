import { PRISMA_CLIENT } from "@/prisma/prisma_client";

const { PrismaClient } = require("@prisma/client");

export default async function deleteIm(id) {
  const prisma = PRISMA_CLIENT;

  const im = await prisma.iM.delete({
    where: {
      id,
    },
  });
  return im;
}
