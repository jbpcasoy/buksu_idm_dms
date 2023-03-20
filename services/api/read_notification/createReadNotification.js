import { PrismaClient } from "@prisma/client";

export default async function createReadNotification({
  notificationId,
  userId,
}) {
  const prisma = new PrismaClient();

  try {
    const readNotification = await prisma.readNotification.create({
      data: {
        Notification: {
          connect: {
            id: notificationId,
          },
        },
        User: {
          connect: {
            id: userId,
          },
        },
      },
    });

    return readNotification;
  } catch (error) {
    throw error;
  }
}
