import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readReadNotifications({
  limit,
  page,
  notificationId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ReadNotification;

  const readNotifications = await prisma.readNotification.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          notificationId: {
            contains: notificationId,
          },
        },
      ],
    },
  });
  const total = await prisma.readNotification.count({
    where: {
      AND: [
        accessibility,
        {
          notificationId: {
            contains: notificationId,
          },
        },
      ],
    },
  });
  return { data: readNotifications, total };
}
