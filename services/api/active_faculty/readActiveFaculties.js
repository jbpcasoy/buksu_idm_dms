import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readActiveFaculties({
  page,
  limit,
  name,
  departmentId,
  sortOrder,
  sortColumn,
}) {
  const prisma = PRISMA_CLIENT;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const activeFaculties = await prisma.activeFaculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        departmentId: {
          contains: departmentId,
        },
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
        },
      },
      include: {
        Faculty: {
          select: {
            id: true,
            user: {
              select: {
                name: true,
                image: true,
              },
            },
            department: {
              select: {
                name: true,
              },
            },
          },
        },
      },
      orderBy: sortFilter,
    });

    const total = await prisma.activeFaculty.count({
      where: {
        departmentId: {
          contains: departmentId,
        },
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
        },
      },
    });

    return { data: activeFaculties, total };
  } catch (error) {
    throw error;
  }
}
