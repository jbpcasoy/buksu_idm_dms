import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedPeerSuggestion(id) {
  try {
    const prisma = PRISMA_CLIENT;

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
