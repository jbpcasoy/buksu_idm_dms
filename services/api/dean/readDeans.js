import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readDeans({ limit, page, ability }) {
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
      AND: [accessibility],
    },
  });

  const total = await prisma.dean.count({
    where: {
      AND: [accessibility],
    },
  });
  return { data: deans, total };
}
