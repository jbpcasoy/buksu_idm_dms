import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readReadNotifications({
  limit,
  page,
  notificationId,
}) {
  const prisma = PRISMA_CLIENT;

  try {
    const readNotifications = await prisma.readNotification.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        notificationId: {
          contains: notificationId,
        },
      },
    });
    const total = await prisma.readNotification.count({
      where: {
        notificationId: {
          contains: notificationId,
        },
      },
    });
    return { data: readNotifications, total };
  } catch (error) {
    throw error;
  }
}
