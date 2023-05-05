import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteActiveCoordinator(id) {
  const prisma = PRISMA_CLIENT;

  const activeCoordinator = await prisma.activeCoordinator.delete({
    where: {
      id,
    },
  });

  return activeCoordinator;
}
