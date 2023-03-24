import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readCoordinators({
  limit,
  page,
  name,
  collegeName,
  departmentName,
  active,
  sortColumn,
  sortOrder,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const coordinators = await prisma.coordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        ActiveCoordinator: true,
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
                id: true,
                name: true,
                college: {
                  select: {
                    name: true,
                  },
                },
              },
            },
          },
        },
      },
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
          department: {
            name: {
              contains: departmentName,
              // mode: "insensitive",
            },
            college: {
              name: {
                contains: collegeName,
                // mode: "insensitive",
              },
            },
          },
        },
        ActiveCoordinator:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
      },
      orderBy: sortFilter,
    });

    const total = await prisma.coordinator.count({
      where: {
        Faculty: {
          user: {
            name: {
              contains: name,
              // mode: "insensitive",
            },
          },
          department: {
            name: {
              contains: departmentName,
              // mode: "insensitive",
            },
            college: {
              name: {
                contains: collegeName,
                // mode: "insensitive",
              },
            },
          },
        },
        ActiveCoordinator:
          active === true
            ? {
                isNot: null,
              }
            : active === false
            ? {
                is: null,
              }
            : undefined,
      },
    });

    return { data: coordinators, total };
  } catch (error) {
    throw error;
  }
}
