import { PrismaClient } from "@prisma/client";

export default async function readPeerSuggestionItems({
  limit,
  page,
  peerSuggestionId,
}) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestionItems = await prisma.peerSuggestionItem.findMany({
      take: limit,
      skip: page ? (page - 1) * limit : undefined,
      where: {
        peerSuggestionId: { contains: peerSuggestionId },
      },
    });

    const total = await prisma.peerSuggestionItem.count({
      where: {
        peerSuggestionId: { contains: peerSuggestionId },
      },
    });

    return { data: peerSuggestionItems, total };
  } catch (error) {
    throw error;
  }
}
