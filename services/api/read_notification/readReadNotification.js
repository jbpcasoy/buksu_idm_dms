import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readReadNotification(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const readNotification = await prisma.readNotification.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return readNotification;
  } catch (error) {
    throw error;
  }
}
