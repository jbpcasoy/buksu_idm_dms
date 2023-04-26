import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readReadNotification({ id, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ReadNotification;

  const readNotification = await prisma.readNotification.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          id,
        },
      ],
    },
  });
  return readNotification;
}
