import { PrismaClient } from "@prisma/client";

export default async function readPeerSuggestions({ limit, page }) {
  const prisma = new PrismaClient();

  try {
    const peerSuggestions = await prisma.peerSuggestion.findMany({
      take: limit,
      skip: (page - 1) * limit,
    });
    const total = await prisma.peerSuggestion.count();

    return { data: peerSuggestions, total };
  } catch (error) {
    throw error;
  }
}
