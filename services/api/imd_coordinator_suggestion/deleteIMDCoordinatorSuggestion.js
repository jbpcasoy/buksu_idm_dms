import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteIMDCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const iMDCoordinatorSuggestion = await prisma.iMDCoordinatorSuggestion.delete(
    {
      where: {
        id,
      },
    }
  );
  return iMDCoordinatorSuggestion;
}
