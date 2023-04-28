import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readDeans({
  limit,
  page,
  name,
  collegeName,
  departmentName,
  active,
  email,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Dean;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const deans = await prisma.dean.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      Faculty: {
        select: {
          user: {
            select: {
              image: true,
              name: true,
              email: true,
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
      ActiveDean: true,
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
              email: {
                contains: email,
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
          ActiveDean:
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

  const total = await prisma.dean.count({
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
              email: {
                contains: email,
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
          ActiveDean:
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
  return { data: deans, total };
}
