import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import _ from "lodash";

export default async function readCITLDirectors({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  const accessibility = accessibleBy(ability).CITLDirector;

  const cITLDirectors = await prisma.cITLDirector.findMany({
    take: limit,
    skip: (page - 1) * limit,
    include: {
      User: true,
      ActiveCITLDirector: true,
    },
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
    orderBy: sortFilter,
  });
  const total = await prisma.cITLDirector.count({
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
  return { data: cITLDirectors, total };
}
