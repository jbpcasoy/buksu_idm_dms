import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedCoordinatorSuggestion(id) {
  try {
    const prisma = new PrismaClient();

    const submittedCoordinatorSuggestion =
      await prisma.submittedCoordinatorSuggestion.delete({
        where: {
          id,
        },
      });

    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
