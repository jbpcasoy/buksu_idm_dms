import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;
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
