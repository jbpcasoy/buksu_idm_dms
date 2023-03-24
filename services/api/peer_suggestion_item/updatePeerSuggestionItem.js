import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function updatePeerSuggestionItem(
  id,
  { value, actionTaken, pageNumber, remarks }
) {
  const prisma = PRISMA_CLIENT;

  try {
    const peerSuggestionItem = await prisma.peerSuggestionItem.update({
      where: {
        id,
      },
      data: {
        value,
        actionTaken,
        pageNumber,
        remarks,
      },
    });

    return peerSuggestionItem;
  } catch (error) {
    throw error;
  }
}
