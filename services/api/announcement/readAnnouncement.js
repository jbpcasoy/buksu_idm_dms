import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readAnnouncement({ id, filter = {}, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Announcement;

  const announcement = await prisma.announcement.findFirstOrThrow({
    where: {
      AND: [
        accessibility,
        {
          ...filter,
          id,
        },
      ],
    },
  });

  return announcement;
}
