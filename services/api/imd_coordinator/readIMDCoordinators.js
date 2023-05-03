import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readIMDCoordinators({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
  ability,
  email,
  active,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const accessibility = accessibleBy(ability).IMDCoordinator;

  const iMDCoordinators = await prisma.iMDCoordinator.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      User: true,
      ActiveIMDCoordinator: true,
    },
    where: {
      AND: [
        accessibility,
        {
          User: {
            name: {
              contains: name,
            },
            email: {
              contains: email,
              // mode: "insensitive",
            },
          },
          ActiveIMDCoordinator:
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

  const total = await prisma.iMDCoordinator.count({
    where: {
      AND: [
        accessibility,
        {
          User: {
            name: {
              contains: name,
            },
          },
        },
      ],
    },
  });

  return { data: iMDCoordinators, total };
}
