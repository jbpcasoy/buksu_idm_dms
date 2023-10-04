import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { PureAbility } from "@casl/ability";
import { accessibleBy } from "@casl/prisma";
import { Prisma } from "@prisma/client";

/**
 * @param {Object} options
 * @param {string} options.id - The coordinator's ID.
 * @param {PureAbility} options.ability
 * @param {Prisma.CoordinatorWhereInput} options.filter
 */
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
