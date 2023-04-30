import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readFaculties({
  limit,
  page,
  name,
  departmentName,
  collegeName,
  sortColumn,
  active,
  email,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);
  const accessibility = accessibleBy(ability).Faculty;

  const faculties = await prisma.faculty.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      user: {
        select: {
          name: true,
          image: true,
          email: true,
        },
      },
      department: {
        select: {
          college: {
            select: {
              name: true,
            },
          },
          name: true,
        },
      },
      ActiveFaculty: true,
    },
    where: {
      AND: [
        accessibility,
        {
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
          ActiveFaculty:
            active === true
              ? {
                  id: {
                    contains: "",
                  },
                }
              : active === false
              ? {
                  isNot: {
                    id: { contains: "" },
                  },
                }
              : undefined,
        },
      ],
    },
    orderBy: sortFilter,
  });

  const total = await prisma.faculty.count({
    where: {
      AND: [
        accessibility,
        {
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
      ],
    },
  });

  return { data: faculties, total };
}
