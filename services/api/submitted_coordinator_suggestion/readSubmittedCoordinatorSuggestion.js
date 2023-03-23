import { PrismaClient } from "@prisma/client";

export default async function readSubmittedCoordinatorSuggestion(id) {
  const prisma = new PrismaClient();

  try {
    const submittedCoordinatorSuggestion =
      await prisma.submittedCoordinatorSuggestion.findUniqueOrThrow({
        where: {
          id,
        },
      });
    return submittedCoordinatorSuggestion;
  } catch (error) {
    throw error;
  }
}
