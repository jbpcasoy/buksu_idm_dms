import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readColleges({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
}) {
  const prisma = PRISMA_CLIENT;
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
