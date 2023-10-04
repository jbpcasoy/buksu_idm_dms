import { PRISMA_CLIENT } from "@/prisma/prisma_client";

export default async function deleteQamisSuggestion(id) {
  const prisma = PRISMA_CLIENT;

  const qamisSuggestion = await prisma.qamisSuggestion.delete({
    where: {
      id,
    },
  });
  return qamisSuggestion;
}
