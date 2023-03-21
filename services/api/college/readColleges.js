import { PrismaClient } from "@prisma/client";
import _ from "lodash";

export default async function readColleges({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
}) {
  const prisma = new PrismaClient();
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const colleges = await prisma.college.findMany({
      skip: (page - 1) * limit,
      take: limit,
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
      },
      orderBy: sortFilter,
    });

    const total = await prisma.college.count({
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
      },
    });

    return { data: colleges, total };
  } catch (error) {
    throw error;
  }
}
