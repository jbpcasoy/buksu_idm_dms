import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readChairpersons({
  limit,
  page,
  name,
  departmentName,
  collegeName,
  active,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const accessibility = accessibleBy(ability).Chairperson;

  try {
    const chairpersons = await prisma.chairperson.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        Faculty: {
          select: {
            departmentId: true,
            user: {
              select: {
                name: true,
                image: true,
              },
            },
            department: {
              select: {
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
        ActiveChairperson: true,
      },
      where: {
        AND: [
          accessibility,
          {
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
            ActiveChairperson:
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
        ],
      },
      orderBy: sortFilter,
    });

    const total = await prisma.chairperson.count({
      where: {
        AND: [
          accessibility,
          {
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
            ActiveChairperson:
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
        ],
      },
    });

    return { data: chairpersons, total };
  } catch (error) {
    throw error;
  }
}
