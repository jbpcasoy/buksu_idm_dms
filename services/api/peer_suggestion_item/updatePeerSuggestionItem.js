import { PrismaClient } from "@prisma/client";

export default async function updatePeerSuggestionItem(
  id,
  { value, actionTaken, pageNumber, remarks }
) {
  const prisma = new PrismaClient();

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
