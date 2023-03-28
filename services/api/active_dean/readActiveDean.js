import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveDean(id, filter = {}) {
  const prisma = PRISMA_CLIENT;
  try {
    const activeDean = await prisma.activeDean.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });

    return activeDean;
  } catch (error) {
    throw error;
  }
}
