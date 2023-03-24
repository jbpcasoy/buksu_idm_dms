import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function createPeerSuggestionItem({
  peerSuggestionId,
  value,
  pageNumber,
  remarks,
}) {
  const prisma = PRISMA_CLIENT;
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
