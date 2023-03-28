import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readDeanEndorsement(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const deanEndorsement = await prisma.deanEndorsement.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });

    return deanEndorsement;
  } catch (error) {
    throw error;
  }
}
