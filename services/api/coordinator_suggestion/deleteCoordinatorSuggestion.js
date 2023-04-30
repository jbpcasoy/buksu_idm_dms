import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteCoordinatorSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const coordinatorSuggestion = await prisma.coordinatorSuggestion.delete({
    where: {
      id,
    },
  });
  return coordinatorSuggestion;
}
