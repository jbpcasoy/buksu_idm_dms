import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteSubmittedPeerSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const submittedPeerSuggestion = await prisma.submittedPeerSuggestion.delete({
    where: {
      id,
    },
  });
  return submittedPeerSuggestion;
}
