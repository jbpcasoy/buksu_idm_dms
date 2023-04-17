import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readUsers({
  limit,
  page,
  name,
  email,
  sortColumn,
  sortOrder,
}) {
  const prisma = PRISMA_CLIENT;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const users = await prisma.user.findMany({
    orderBy: sortFilter,
    take: limit,
    skip: (page - 1) * limit,
    where: {
      email: {
        contains: email,
      },
      name: {
        contains: name,
        // mode: "insensitive",
      },
    },
  });

  const total = await prisma.user.count({
    where: {
      name: {
        contains: name,
        // mode: "insensitive",
      },
    },
  });

  return { data: users, total };
}
