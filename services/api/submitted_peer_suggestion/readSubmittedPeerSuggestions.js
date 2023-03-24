import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readSubmittedPeerSuggestions({ limit, page }) {
  try {
    const prisma = PRISMA_CLIENT;

    const submittedPeerSuggestions =
      await prisma.submittedPeerSuggestion.findMany({
        take: limit,
        skip: (page - 1) * limit,
      });
    const total = await prisma.submittedPeerSuggestion.count();
    return { data: submittedPeerSuggestions, total };
  } catch (error) {
    throw error;
  }
}
