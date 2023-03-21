import { PrismaClient } from "@prisma/client";

export default async function deleteSubmittedPeerSuggestion(id) {
  try {
    const prisma = new PrismaClient();

    const submittedPeerSuggestion = await prisma.submittedPeerSuggestion.delete(
      {
        where: {
          id,
        },
      }
    );
    return submittedPeerSuggestion;
  } catch (error) {
    throw error;
  }
}
