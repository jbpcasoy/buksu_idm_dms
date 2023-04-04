import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import _ from "lodash";

export default async function readIMDCoordinators({
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
    const iMDCoordinators = await prisma.iMDCoordinator.findMany({
      take: limit,
      skip: (page - 1) * limit,
      include: {
        User: true,
        ActiveIMDCoordinator: true,
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

    const total = await prisma.iMDCoordinator.count({
      where: {
        User: {
          name: {
            contains: name,
          },
        },
      },
    });

    return { data: iMDCoordinators, total };
  } catch (error) {
    throw error;
  }
}
