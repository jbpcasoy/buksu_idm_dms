import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCoordinator(id) {
  const prisma = PRISMA_CLIENT;

  const coordinator = prisma.coordinator.delete({
    where: {
      id,
    },
  });
  return coordinator;
}
