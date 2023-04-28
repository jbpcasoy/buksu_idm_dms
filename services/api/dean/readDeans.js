import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readDeans({
  limit,
  page,
  name,
  collegeName,
  departmentName,
  active,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Dean;

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

  const total = await prisma.dean.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: deans, total };
}
