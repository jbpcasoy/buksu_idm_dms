import { PrismaClient } from "@prisma/client";

export default async function readPeerSuggestionItems({ limit, page }) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestionItems = await prisma.peerSuggestionItem.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });

    const total = await prisma.peerSuggestionItem.count();

    return { data: peerSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
