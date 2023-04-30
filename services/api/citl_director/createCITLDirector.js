import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createCITLDirector({ userId }) {
  const prisma = PRISMA_CLIENT;

  const cITLDirector = await prisma.cITLDirector.create({
    data: {
      User: {
        connect: {
          id: userId,
        },
      },
    },
  });
  return cITLDirector;
}
