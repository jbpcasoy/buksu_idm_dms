import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMEvent(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMEvent = await prisma.iMEvent.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });
    return iMEvent;
  } catch (error) {
    throw error;
  }
}
