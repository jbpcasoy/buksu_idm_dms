import { PrismaClient } from "@prisma/client";

export default async function readReadNotifications({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const readNotifications = await prisma.readNotification.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.readNotification.count();
    return { data: readNotifications, total };
  } catch (error) {
    throw error;
  }
}
