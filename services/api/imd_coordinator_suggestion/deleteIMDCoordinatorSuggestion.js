import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteIMDCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  try {
    const iMDCoordinatorSuggestion =
      await prisma.iMDCoordinatorSuggestion.delete({
        where: {
          id,
        },
      });
    return iMDCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
