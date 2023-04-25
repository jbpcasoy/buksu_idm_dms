import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readFile({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).File;

  const file = await prisma.file.findFirstOrThrow({
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
      iM: true,
    },
  });

  return file;
}
