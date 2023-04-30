import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readAnnouncements({
  limit,
  page,
  title,
  description,
  link,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Announcement;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const announcements = await prisma.announcement.findMany({
    orderBy: sortFilter,
    take: limit,
    skip: page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          title: {
            contains: title,
          },
          description: {
            contains: description,
          },
          link: {
            contains: link,
          },
        },
      ],
    },
  });
  const total = await prisma.announcement.count({
    where: {
      AND: [
        accessibility,
        {
          title: {
            contains: title,
          },
          description: {
            contains: description,
          },
          link: {
            contains: link,
          },
        },
      ],
    },
  });

  return { data: announcements, total };
}
