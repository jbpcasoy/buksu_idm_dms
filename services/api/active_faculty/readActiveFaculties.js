import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readActiveFaculties({
  page,
  limit,
  name,
  departmentId,
  sortOrder,
  sortColumn,
  ability,
}) {
  const prisma = PRISMA_CLIENT;

  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const accessibility = accessibleBy(ability).ActiveFaculty;

  try {
    const activeFaculties = await prisma.activeFaculty.findMany({
      take: limit,
      skip: (page - 1) * limit,
      where: {
        AND: [
          accessibility,
          {
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
        ],
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
        AND: [
          accessibility,
          {
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
        ],
      },
    });

    return { data: activeFaculties, total };
  } catch (error) {
    throw error;
  }
}
