import { PrismaClient } from "@prisma/client";

export default async function readReadNotification(id) {
  const prisma = new PrismaClient();

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
