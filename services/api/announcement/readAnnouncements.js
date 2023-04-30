import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readAnnouncements({ limit, page, ability }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Announcement;

  const announcements = await prisma.announcement.findMany({
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [accessibility],
    },
  });
  const total = await prisma.announcement.count({
    where: {
      AND: [accessibility],
    },
  });

  return { data: announcements, total };
}
