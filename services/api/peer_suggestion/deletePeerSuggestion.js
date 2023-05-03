import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deletePeerSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const peerSuggestion = await prisma.peerSuggestion.delete({
    where: {
      id,
    },
  });
  return peerSuggestion;
}
