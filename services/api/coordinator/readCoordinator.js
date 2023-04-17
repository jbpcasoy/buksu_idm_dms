import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readCoordinator({ id, ability, filter = {} }) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).Coordinator;

  const coordinator = prisma.coordinator.findFirstOrThrow({
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
  return coordinator;
}
