import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readUsers({
  limit,
  page,
  name,
  email,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).User;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const users = await prisma.user.findMany({
    orderBy: sortFilter,
    take: limit,
    skip: (page - 1) * limit,
    where: {
      AND: [
        accessibility,
        {
          email: {
            contains: email,
          },
          name: {
            contains: name,
            // mode: "insensitive",
          },
        },
      ],
    },
  });

  const total = await prisma.user.count({
    where: {
      AND: [
        accessibility,
        {
          email: {
            contains: email,
          },
          name: {
            contains: name,
            // mode: "insensitive",
          },
        },
      ],
    },
  });

  return { data: users, total };
}
