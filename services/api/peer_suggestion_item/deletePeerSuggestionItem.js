import { PrismaClient } from "@prisma/client";

export default async function deletePeerSuggestionItem(id) {
  const prisma = new PrismaClient();
  try {
    const peerSuggestionItem = await prisma.peerSuggestionItem.delete({
      where: {
        id,
      },
    });
    return peerSuggestionItem;
  } catch (error) {
    throw error;
  }
}
