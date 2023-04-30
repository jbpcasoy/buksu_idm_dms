import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteReadNotification(id) {
  const prisma = PRISMA_CLIENT;

  const readNotification = await prisma.readNotification.delete({
    where: {
      id,
    },
  });
  return readNotification;
}
