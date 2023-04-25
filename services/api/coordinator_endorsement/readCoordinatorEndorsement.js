import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinatorEndorsement({
  id,
  filter = {},
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).CoordinatorEndorsement;

  const coordinatorEndorsement =
    await prisma.coordinatorEndorsement.findFirstOrThrow({
      where: {
        AND: [
          accessibility,
          {
            ...filter,
            id,
          },
        ],
      },
      include: {
        Coordinator: {
          include: {
            Faculty: {
              include: {
                department: {
                  include: {
                    college: {
                      include: {
                        ActiveDean: true,
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
    });

  return coordinatorEndorsement;
}
