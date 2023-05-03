import { PRISMA_CLIENT } from "@/prisma/prisma_client";
import { accessibleBy } from "@casl/prisma";

export default async function readPeerSuggestionItems({
  limit,
  page,
  peerSuggestionId,
  ability,
}) {
  const prisma = PRISMA_CLIENT;
  const accessibility = accessibleBy(ability).PeerSuggestionItem;

  const peerSuggestionItems = await prisma.peerSuggestionItem.findMany({
    take: limit,
    skip: limit && page ? (page - 1) * limit : undefined,
    where: {
      AND: [
        accessibility,
        {
          peerSuggestionId: { contains: peerSuggestionId },
        },
      ],
    },
  });

  const total = await prisma.peerSuggestionItem.count({
    where: {
      AND: [
        accessibility,
        {
          peerSuggestionId: { contains: peerSuggestionId },
        },
      ],
    },
  });

  return { data: peerSuggestionItems, total };
}
