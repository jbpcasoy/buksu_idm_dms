import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readCITLDirectors({
  limit,
  page,
  name,
  sortColumn,
  sortOrder,
}) {
  const prisma = PRISMA_CLIENT;
  const sortFilter = {};
  _.set(sortFilter, sortColumn, sortOrder);

  try {
    const cITLDirectors = await prisma.cITLDirector.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        User: true,
        ActiveCITLDirector: true,
      },
      where: {
        User: {
          name: {
            contains: name,
          },
        },
      },
      orderBy: sortFilter,
    });
    const total = await prisma.cITLDirector.count({
      where: {
        User: {
          name: {
            contains: name,
          },
        },
      },
    });
    return { data: cITLDirectors, total };
  } catch (error) {
    throw error;
  }
}
