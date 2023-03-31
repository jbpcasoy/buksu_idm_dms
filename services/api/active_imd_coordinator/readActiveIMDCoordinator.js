import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readActiveIMDCoordinator(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const activeIMDCoordinator =
    await prisma.activeIMDCoordinator.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });
  return activeIMDCoordinator;
}
