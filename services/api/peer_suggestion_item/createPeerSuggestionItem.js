import { PrismaClient } from "@prisma/client";

export default async function createPeerSuggestionItem({
  peerSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestionItem = await prisma.peerSuggestionItem.create({
      data: {
        pageNumber,
        value,
        PeerSuggestion: {
          connect: {
            id: peerSuggestionId,
          },
        },
        remarks,
      },
    });
    return peerSuggestionItem;
  } catch (error) {
    throw error;
  }
}
