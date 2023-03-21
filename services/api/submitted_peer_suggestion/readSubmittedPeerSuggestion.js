import { PrismaClient } from "@prisma/client";

export default async function readSubmittedPeerSuggestion(id) {
  const prisma = new PrismaClient();
  try {
    const submittedPeerSuggestion =
      await prisma.submittedPeerSuggestion.findUniqueOrThrow({
        where: {
          id,
        },
      });

    return submittedPeerSuggestion;
  } catch (error) {
    throw error;
  }
}
