import { PrismaClient } from "@prisma/client";

export default async function readSubmittedPeerSuggestions({ limit, page }) {
  try {
    const prisma = new PrismaClient();

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
