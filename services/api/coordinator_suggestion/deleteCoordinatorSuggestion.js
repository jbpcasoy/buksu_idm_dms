import { PrismaClient } from "@prisma/client";

export default async function deleteCoordinatorSuggestion(id) {
  const prisma = new PrismaClient();
  try {
    const coordinatorSuggestion = await prisma.coordinatorSuggestion.delete({
      where: {
        id,
      },
    });
    return coordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
