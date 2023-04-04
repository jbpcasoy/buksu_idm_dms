import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readIMDCoordinatorSuggestion(id, filter = {}) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestion =
    await prisma.iMDCoordinatorSuggestion.findFirstOrThrow({
      where: {
        ...filter,
        id,
      },
    });

  return iMDCoordinatorSuggestion;
}
