import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readColleges({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);
  const accessibility = accessibleBy(ability).College;

  const colleges = await prisma.college.findMany({
    skip: (page - 1) * limit,
    take: limit,
    where: {
      AND: [
        accessibility,
        {
          name: {
            contains: name,
            // mode: "insensitive",
          },
        },
      ],
    },
    orderBy: sortFilter,
  });

  const total = await prisma.college.count({
    where: {
      AND: [
        accessibility,
        {
          name: {
            contains: name,
            // mode: "insensitive",
          },
        },
      ],
    },
  });

  return { data: colleges, total };
}
