import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function readPeerSuggestionItem(id) {
  const prisma = PRISMA_CLIENT;

  const peerSuggestionItem = await prisma.peerSuggestionItem.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return peerSuggestionItem;
}
