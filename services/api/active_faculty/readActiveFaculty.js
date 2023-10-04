import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";
import { Prisma } from "@prisma/client";

/**
 *
 * @param {Object} options
 * @param {Prisma.ActiveFacultyWhereInput} options.filter
 */

export default async function readActiveFaculty({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).ActiveFaculty;

  const activeFaculty = await prisma.activeFaculty.findFirstOrThrow({
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

  return activeFaculty;
}
