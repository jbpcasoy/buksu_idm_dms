import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readDepartment({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Department;

  const department = await prisma.department.findFirstOrThrow({
    include: {
      ActiveChairperson: {
        select: {
          Chairperson: {
            select: {
              Faculty: {
                select: {
                  user: true,
                },
              },
            },
          },
        },
      },
      ActiveCoordinator: {
        select: {
          Coordinator: {
            select: {
              Faculty: {
                select: {
                  user: true,
                },
              },
            },
          },
        },
      },
    },
    where: {
      AND: [
        accessibility,
        {
          ...filter,
          id,
        },
      ],
    },
  });

  return department;
}
