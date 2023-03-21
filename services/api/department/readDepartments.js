import { PrismaClient } from "@prisma/client";
import _ from "lodash";

export default async function readDepartments({
  limit,
  page,
  name,
  collegeName,
  collegeId,
  sortColumn,
  sortOrder,
}) {
  const prisma = new PrismaClient();
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const departments = await prisma.department.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        college: {
          select: {
            name: true,
          },
        },
      },
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
        college: {
          id: {
            contains: collegeId,
          },
          name: {
            contains: collegeName,
            // mode: "insensitive",
          },
        },
      },
      orderBy: sortFilter,
    });

    const total = await prisma.department.count({
      where: {
        name: {
          contains: name,
          // mode: "insensitive",
        },
        college: {
          id: {
            contains: collegeId,
          },
          name: {
            contains: collegeName,
            // mode: "insensitive",
          },
        },
      },
    });

    return { data: departments, total };
  } catch (error) {
    throw error;
  }
}
