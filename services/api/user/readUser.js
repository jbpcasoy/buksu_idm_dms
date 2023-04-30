import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readUser({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).User;

  const user = await prisma.user.findFirstOrThrow({
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
      CITLDirector: {
        include: {
          ActiveCITLDirector: true,
        },
      },
      IMDCoordinator: {
        include: {
          ActiveIMDCoordinator: true,
        },
      },
      LoginRole: true,
      ActiveFaculty: {
        include: {
          ActiveDean: true,
          ActiveChairperson: true,
          ActiveCoordinator: true,
          Faculty: {
            include: {
              department: {
                include: {
                  college: true,
                },
              },
            },
          },
        },
      },
    },
  });

  return user;
}
