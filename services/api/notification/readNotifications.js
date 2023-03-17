import { PrismaClient } from "@prisma/client";

export default async function readNotifications({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const notifications = await prisma.notification.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.notification.count();

    return { data: notifications, total };
  } catch (error) {
    throw error;
  }
}
