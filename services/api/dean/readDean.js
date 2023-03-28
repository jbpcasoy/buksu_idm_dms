import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDean(id, filter = {}) {
  const prisma = PRISMA_CLIENT;
  try {
    const dean = await prisma.dean.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });
    return dean;
  } catch (error) {
    throw error;
  }
}
