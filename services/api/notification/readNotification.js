import { PrismaClient } from "@prisma/client";

export default async function readNotification(id) {
  const prisma = new PrismaClient();

  try {
    const notification = await prisma.notification.findUniqueOrThrow({
      where: {
        id,
      },
    });
    return notification;
  } catch (error) {
    throw error;
  }
}
