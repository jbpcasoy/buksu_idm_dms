import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedPeerSuggestion(id) {
  const prisma = PRISMA_CLIENT;
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
