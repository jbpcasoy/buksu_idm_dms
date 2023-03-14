import { PrismaClient } from "@prisma/client";

export default async function readPeerSuggestionItem(id) {
  const prisma = new PrismaClient();

  const peerSuggestionItem = await prisma.peerSuggestionItem.findUniqueOrThrow({
    where: {
      id,
    },
  });
  return peerSuggestionItem;
}
