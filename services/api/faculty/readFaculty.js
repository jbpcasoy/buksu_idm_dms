import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readFaculty({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Faculty;

  const faculty = await prisma.faculty.findFirstOrThrow({
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
      user: true,
      ActiveFaculty: true,
      department: {
        include: {
          college: true,
        },
      },
    },
  });

  return faculty;
}
