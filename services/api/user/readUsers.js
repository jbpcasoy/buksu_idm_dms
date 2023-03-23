import { PrismaClient } from ".prisma/client";
import _ from "lodash";

export default async function readUsers({
  limit,
  page,
  name,
  email,
  sortColumn,
  sortOrder,
}) {
  const prisma = new PrismaClient();

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);
  try {
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
  } catch (error) {
    throw error;
  }
}
