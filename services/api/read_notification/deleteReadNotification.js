import { PrismaClient } from "@prisma/client";

export default async function deleteReadNotification(id) {
  const prisma = new PrismaClient();

  try {
    const readNotification = await prisma.readNotification.delete({
      where: {
        id,
      },
    });
    return readNotification;
  } catch (error) {
    throw error;
  }
}
